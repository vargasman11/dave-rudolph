$grid-breakpoints: (
xs: 0,
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px
);

When deploying to hostinger since the project lived in "/public_html"

the `public_html/.htaccess` need to be:

```angular2html
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/web/
RewriteRule ^(.*)$ /web/$1 [L]
```

and the `public_html/web/.htacces` needs to be:
```angular2html
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Send would-be 404 requests to Craft
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !^/(favicon\.ico|apple-touch-icon.*\.png)$ [NC]
    RewriteRule (.+) index.php?p=$1 [QSA,L]
</IfModule>
```
in the `settings->site` the base url needs to be an ENV variable of `$SITE_URL`
