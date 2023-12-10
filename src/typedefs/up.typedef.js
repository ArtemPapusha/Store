/**
* @typedef {{
*  className: String,
*   textContent: TypographyDef ?,
*   variant: 'text' | 'contained' | 'outlined' ?,
*   buttonSize: 'small' | 'medium' | 'large' ?,
*   color: 'primary' | 'primary-light' | 'primary-dark' | 'secondary' |
*          'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' |
*          'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' |
*          'info-light' | 'info-dark' ?,
*   disabled: Boolean ?,
*   startIcon: Icon ?,
*   endIcon: Icon ?,
* }} ButtonDef
*/

/**
* @typedef {{
*   iconName: String ?,
*   size: '12' | '14' | '16' | '18' | '24' | '26' ?,
*   color: 'primary' | 'primary-light' | 'primary-dark' | 'secondary' |
*          'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' |
*          'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' |
*          'info-light' | 'info-dark' ?,
*   className: String ?,
* }} IconDef
*/

/**
* @typedef {{
*   text: String ?,
*   type: 'subtitle1' | 'subtitle2' | 'body1' |
*         'body2' | 'h1' | 'h2' | 'h3' | 'h4' |
*         'h5' | 'h6' | 'button' | 'caption' | 'overline' ?,
*   textColor: 'primary' | 'primary-light' | 'primary-dark' |
*              'secondary' | 'secondary-light' | 'secondary-dark' | 
*              'danger' | 'danger-light' | 'danger-dark' | 'warning' |
*              'warning-light' | 'warning-dark' | 'info' | 'info-light' |
*              'info-dark' | 'white' | 'black' ?,
*   textWeight: '100' | '300' | '400' | '500' | '700' | '900' ?,
* }} TypographyDef
*/

/**
* @typedef {{
*   title: TypographyDef ?,
*   image: String ?,
*   description: TypographyDef ?,
*   price: TypographyDef ?,
*   button: ButtonDef ?,
* }} CardDef
*/





