import React, { Component } from "react";
import { View, StatusBar, Text, FlatList } from "react-native";
import currencies from "../data/currencies";
import { ListItem, Separator } from "../components/List";
import { connect } from "react-redux";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends Component {
  handlePress = currency => {
    console.log("row pressed");
    const { type } = this.props.navigation.state.params;
    if (type === "base") this.props.dispatch(changeBaseCurrency(currency));
    else if (type === "quote")
      this.props.dispatch(changeQuoteCurrency(currency));
    this.props.navigation.goBack(null);
  };
  render() {
    const comparisonCurrency =
      this.props.navigation.state.params.type === "quote"
        ? this.props.quoteCurrency
        : this.props.baseCurrency;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  return {
    baseCurrency,
    quoteCurrency,
    primaryColor: state.theme.primaryColor
  };
};

export default connect(mapStateToProps)(CurrencyList);
