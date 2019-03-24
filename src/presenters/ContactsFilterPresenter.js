import ContactsFilterModel from "../models/ContactsFilterModel"

class ContactsFilterPresenter{

    constructor(){

        this.contactsFilterModel = new ContactsFilterModel();

    }

    setView(view){
        this.view = view;
    }


    onFilterTextChange(filterText){
        console.log(this.constructor.name," : ","In onFilterTextChange");
        console.log(this.constructor.name," : ","filterText:",filterText);
        if(filterText===""){
            this.contactsFilterModel.filterContactsDummy("*");
            this.view.updateFilteredContacts(this.contactsFilterModel.contacts);
        }else{
            this.contactsFilterModel.filterContacts(filterText);
            this.view.updateFilteredContacts(this.contactsFilterModel.filteredContacts);
        }

    }
}

export default ContactsFilterPresenter;