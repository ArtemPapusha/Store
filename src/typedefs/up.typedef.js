/**
* @typedef {'primary' | 'primary-light' | 'primary-dark' | 'secondary' |
*          'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' |
*          'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' |
*          'info-light' | 'info-dark'} ColorDef
*/

/**
* @typedef {{
*  className: String,
*   textContent: TypographyDef ?,
*   variant: 'text' | 'contained' | 'outlined' ?,
*   buttonSize: 'small' | 'medium' | 'large' ?,
*   color: ColorDef ?,
*   disabled: Boolean ?,
*   startIcon: IconDef ?,
*   endIcon: IconDef ?,
* }} ButtonDef
*/

/**
* @typedef {{
*   iconName: String ?,
*   size: '12' | '14' | '16' | '18' | '24' | '26' ?,
*   color: ColorDef ?,
*   className: String ?,
* }} IconDef
*/

/**
* @typedef {{
*   text: String ?,
*   type: 'subtitle1' | 'subtitle2' | 'body1' |
*         'body2' | 'h1' | 'h2' | 'h3' | 'h4' |
*         'h5' | 'h6' | 'button' | 'caption' | 'overline' ?,
*   textColor: ColorDef ?,
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





