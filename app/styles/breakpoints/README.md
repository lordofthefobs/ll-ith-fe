# Media query breakpoint stylesheets

Stylesheets contained in the `breakpoints` directory are named according to the min width that is 
set in the media queries inside `app.scss`. They are organized and named based on the mobile first
design approach where base styles that are included for all devices and widths are intentionally 
kept as lean as possible, with more resource intensive styles being added in an upward fashion 
to enhance the design. You should not need to add any new files to the breakpoint directory.
The naming scheme of files takes its cue from the Bones theme for Wordpress and can be seen 
in detail on the [github page](https://github.com/eddiemachado/bones).

## Adding styles
Keep in mind the styles you add to any given stylesheet will be applied to the targeted width and
will affect all widths above it. For instance, adding a style inside `_768up.scss` will be applied
for devices with of 768 or greater.
