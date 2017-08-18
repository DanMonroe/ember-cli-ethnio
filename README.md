# ember-cli-ethnio

Plugin for ember-cli that injects [Ethnio](https://ethn.io) advanced research management into your application.

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
