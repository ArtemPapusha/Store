import FieldBase from '@/components/input/FieldBase';
/**
 * Class representing a dot.
 * @extends FieldBase
 */
class FieldInputCheckbox extends FieldBase {
  $input = null;
  $label = null;
  $field = null;

  /**
   * @param {{
   *   name: String,
   *   label: String ?,
   *   checkboxes: Array,
   *   checkedCheckbox: Array ?,
   * }} args
   */
  constructor({
    name,
    label,
    checkboxes = [],
    checkedCheckbox = [],
  }) {
    super({ name, label });
    this.value = '';
    this.type = 'checkbox';
    this.checkboxes = checkboxes;
    this.checkedCheckbox = checkedCheckbox;

    this.buildLabel();
    this.buildInputCheckbox();
    // this.buildField();
    this.buildFieldWrapper();

    return this;
  }

  get fieldCheckbox() {
    return this.$field;
  }

  buildInputCheckbox = () => {
    const $checkboxWrapper = document.createElement('div');
    $checkboxWrapper.className = `checkbox-wrapper-${this.name}`;

    $checkboxWrapper.addEventListener('mouseleave', this.handleMouseOut);

    this.checkboxes.forEach((value) => {
      const $inputCheckbox = document.createElement('input');
      $inputCheckbox.className = 'field-input-checkbox';
      $inputCheckbox.setAttribute('type', this.type);
      $inputCheckbox.setAttribute('name', this.name);
      $inputCheckbox.setAttribute('id', `field-input-checkbox-${this.name}-${value}`);
      $inputCheckbox.setAttribute('value', value);

      if (this.checkedCheckbox.includes(value)) {
        $inputCheckbox.setAttribute('checked', 'checked');
      }

      const $label = document.createElement('label');
      $label.setAttribute('for', `field-input-checkbox-${this.name}-${value}`);
      $label.innerText = value;

      $checkboxWrapper.appendChild($inputCheckbox);
      $checkboxWrapper.appendChild($label);
    });
  
    // const $fragment = document.createDocumentFragment();

    // $fragment.appendChild($checkboxWrapper);

    this.$field = $checkboxWrapper;
  };

  // buildField = () => {
  //   const $fragment = document.createDocumentFragment();

  //   $fragment.appendChild(this.$field);
  // };

  /**
   * @param { Mouse Event } event
   */
  handleMouseOut = (event) => {
    this.handleError(event.target.$checkboxWrapper);
  };
}

export default FieldInputCheckbox;