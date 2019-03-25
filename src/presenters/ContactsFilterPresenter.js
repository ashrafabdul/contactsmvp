import ContactsFilterModel from "../models/ContactsFilterModel"

class ContactsFilterPresenter {

    constructor() {
        this.onModelChange = this.onModelChange.bind(this);

        this.contactsFilterModel = new ContactsFilterModel();
        this.contactsFilterModel.setModelChangeCallback(this.onModelChange);
    }

    setView(view) {
        this.view = view;
    }

    onFilterTextChange(filterText) {
        console.log(this.constructor.name, " : ", "In onFilterTextChange");
        console.log(this.constructor.name, " : ", "filterText:", filterText);
        if (filterText === "") {
            this.contactsFilterModel.filterContacts(".*");
            this.view.updateFilteredContacts(this.contactsFilterModel.contacts);
        } else {
            this.contactsFilterModel.filterContacts(filterText);
            this.view.updateFilteredContacts(this.contactsFilterModel.filteredContacts);
        }
    }

    // Added to notify model change (Should all view updates should occur here?)
    onModelChange() {
        this.view.updateFilteredContacts(this.contactsFilterModel.contacts);
    }


}

export default ContactsFilterPresenter;