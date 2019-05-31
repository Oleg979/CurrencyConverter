import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";
import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion
} from "../actions/currencies";
import { connect } from "react-redux";
import { connectAlert } from "../components/Alert";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    const { currencyError, alertWithType } = this.props;
    if (nextProps.currencyError && !currencyError)
      alertWithType("error", "Error", nextProps.currencyError);
  }

  handlePressBaseCurrency = () => {
    console.log("base pressed");
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };
  handlePressQuoteCurrency = () => {
    console.log("quote pressed");
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };
  handleTextChange = text => {
    this.props.dispatch(changeCurrencyAmount(text));
  };
  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };
  handleOptionsPress = () => {
    console.log("options pressed");
    this.props.navigation.navigate("Options");
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      isFetching,
      amount,
      lastConvertedDate,
      conversionRate,
      primaryColor
    } = this.props;

    let quotePrice = "Loading...";
    if (!isFetching) quotePrice = (amount * conversionRate).toFixed(2);

    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar hidden={true} />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConvertedDate}
            conversionRate={conversionRate}
          />
          <ClearButton
            text="Reverse currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency, amount } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    primaryColor: state.theme.primaryColor,
    baseCurrency,
    quoteCurrency,
    amount,
    currencyError: state.currencies.error,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date()
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
