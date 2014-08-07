# Components

No files will be initially created under components/ as these files are application specific.  
However, once a project is created, many .scss files will fall under components/.  
Since that directory can potentially grow quite large, that directory can be further divided into
modular segments as necessary. For example:

    components/
       data_visualizations/
       dialogs/
       feeds/
       loading/
       _helpful_info.scss
       _pagination.scss
       _search_box.scss
       _tooltip.scss

Note that if there is more than one variation of a particular component, a directory
for that component will be created. That directory will have a _base.scss for the generic
component styles and then additional .scss files for specific variations. For example:

    components/
       dialogs/
       _base.scss
       _edit_admin_contact_info.scss
       _edit_notifications.scss

