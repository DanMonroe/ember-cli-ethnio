# ember-cli-ethnio

Plugin for ember-cli that injects [Ethnio](https://ethn.io) advanced research management into your application.

Ethnio is an research recruiting tool for intercepting people that use your interface from your web site or app, and then conducting some kind of research with them - moderated or automated - and scheduling them or paying them incentives automatically if you'd like. You can also email or tweet or post a link to an ethnio screener, but most people place our JavaScript on their site. Ethnio is not a recruiting agency or research consulting firm.

## Installation

To install simply run:

```
ember install ember-cli-ethnio
```

## Usage

Once configured, the Ethnio screener code will be injected into your index.html file.

## Configuration

This plugin uses the Ember CLI project's configuration as defined in `config/environment.js`.

The Ethnio code will appear only if `ENV.ethnioConfig.enabled` is defined and is set to true. For instance, to enable the Ethnio in only the production environment:

```javascript
if (environment === 'production') {
  ENV.ethnioConfig = {
    enabled: true,
    screenerNumber: 12345
  };
}
```

### Configuration Parameters

* `enabled` (Default: `false`): Whether or not the feature is enabled.
* `screenerNumber` (Default: `null`): the number of the screener survey you wish to display.
* `screenerNumber` (Default: `'//ethn.io/'`): The host location of the Ethnio scripts

## Running Tests

* `git clone git@github.com:danmonroe/ember-cli-ethnio.git`
* `npm install`
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
