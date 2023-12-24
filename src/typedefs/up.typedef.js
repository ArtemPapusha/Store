/**
* @typedef {'primary' | 'primary-light' | 'primary-dark' | 'secondary' |
*          'secondary-light' | 'secondary-dark' | 'danger' | 'danger-light' |
*          'danger-dark' | 'warning' | 'warning-light' | 'warning-dark' | 'info' |
*          'info-light' | 'info-dark'} ColorDef
*/

/**
* @typedef {{
*   className: String ?,
*   textContent: TypographyDef ?,
*   variant: 'text' | 'text-circle' | 'contained' | 'contained-circle' | 'outlined' | 'outlined-circle' ?,
*   buttonSize: 'small' | 'medium' | 'large' ?,
*   color: ColorDef ?,
*   disabled: Boolean ?,
*   startIcon: IconDef ?,
*   endIcon: IconDef ?,
*   handler: String ?,
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

/**
* @typedef {{
*   count: Number ,
*   variant: 'text' | 'text-circle' | 'contained' | 'contained-circle' | 'outlined' | 'outlined-circle' ?,
*   color: ColorDef ?,
*   size: 'small' | 'medium' | 'large' ?,
* }} PaginationDef
*/

/**
* @typedef {{
  *   message: TypographyDef ?,
  *   variant: 'default' | 'error' | 'warning' | 'info' | 'succsess' ?,
  *   position: 'top-center' | 'top-right' | 'bottom-right' |
  *             'bottom-center' | 'bottom-left' | 'top-left' ?,
  *   transition: 'left' | 'up' | 'right' | 'down' ?,
  *   startIcon: IconDef ?,
  *   endIcon: IconDef ?,
  *   button: ButtonDef ?,
  * }} SnackbarDef
  */





