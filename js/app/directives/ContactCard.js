function ContactCard() {
  return {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>NAME: {{name}}</label>',
        '<label>EMAIL: {{email}}</label>',
        '<label>PHONE: {{phone}}</label>',
      '</div>'
    ].join(''),
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard)
