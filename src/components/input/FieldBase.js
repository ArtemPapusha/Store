import FieldValidation from '@/components/input/FieldValidation';
/**
 * Class representing a dot.
 * @extends FieldValidation
 */
class FieldBase extends FieldValidation {
  $fieldWrapper = null;

  /**
   * @param {{
   *   name: String,
   *   label: String,
   * }} args
   */
  constructor({ name, label }) {
    super();
    this.name = name;
    this.label = label;
  }

  set fieldWrapper(value) {
    this.$fieldWrapper = value;
  }

  get $fieldWrapper() {
    return this.$fieldWrapper;
  }

  set setLabel(value) {
    this.$label = value;
  }

  get $label() {
    return this.$label;
  }

  buildLabel = () => {
    const $label = document.createElement('label');

    $label.className = `field-label field-${this.name}-label`;
    $label.setAttribute('htmlFor', this.name);

    $label.innerText = this.label;

    this.setLabel = $label;
  };

  buildFieldWrapper = () => {
    const $wrapper = document.createElement('div');

    $wrapper.className = `field-${this.name}`;

    $wrapper.appendChild(this.$field);

    this.$fieldWrapper = $wrapper;
  };

  render = () => {
    document.body.appendChild(this.$fieldWrapper);
  };
}

export default FieldBase;