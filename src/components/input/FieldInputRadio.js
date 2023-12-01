import FieldBase from '@/components/input/FieldBase';
/**
 * Class representing a dot.
 * @extends FieldBase
 */
class FieldInputRadio extends FieldBase {
  $input = null;
  $label = null;
  $field = null;
  $fieldset = null;

  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   radioList: Array,
   *   checkedRadio: Array,
   * }} args
   */
  constructor({
    name,
    label,
    radioList = [],
    checkedRadio = [],
  }) {
    super({ name, label });
    this.value = '';
    this.type = 'radio';
    this.radioList = radioList;
    this.checkedRadio = checkedRadio;

    this.buildLabel();
    this.buildInputRadio();
    this.buildField();
    this.buildFieldWrapper();

    return this;
  }

  set setField(value) {
    this.$field = value;
  }

  get $field() {
    return this.$field;
  }

  buildInputRadio = () => {
    const $radioWrapper = document.createElement('div');
    $radioWrapper.className = `radio-wrapper-${this.name}`;


    this.radioList.forEach((value) => {
      const $inputRadio = document.createElement('input');
      $inputRadio.className = 'field-input-radio';
      $inputRadio.setAttribute('type', this.type);
      $inputRadio.setAttribute('name', this.name);
      $inputRadio.setAttribute('id', `field-input-radio-${this.name}-${value}`);
      $inputRadio.setAttribute('value', value);

      if (this.checkedRadio.includes(value)) {
        $inputRadio.setAttribute('checked', 'checked');
      }

      const $label = document.createElement('label');
      $label.setAttribute('for', `field-input-radio-${this.name}-${value}`);
      $label.innerText = value;

      $radioWrapper.appendChild($inputRadio);
      $radioWrapper.appendChild($label);
    });

    this.setField = $radioWrapper;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$field);
  };
}

export default FieldInputRadio;
