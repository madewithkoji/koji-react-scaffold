## Customization Directory

In this directory you will find the customization options that are
visually displayed above. These properties are packaged together and
available in your app.

To access these properties from your code, include the following line
in your script:

    import Koji from '@withkoji/vcc';

You can then access the properties using the `Koji.config` object.

    console.log(Koji.config)

For example, to access the backgroundColor defined in colors.json, you
need to use ` Koji.config.colors.backgroundColor`


### Create new Customizations

Add additional fields into any of these files @@editor key using the
format that is used in already created customizations.

Add a new Customization menu by making a new json file in this
directory and copying over the schema from one of the existing configurations.

For more details, see [the VCC reference](https://withkoji.com/docs/editor/vcc-reference) page.

### What to watch out for

The visual configuration tool won't work if there is an error in your
json file.
Watch out for a trailing comma or a missed curly brace.