import React, {Component} from 'react';
import ContactsFilterView from "./ContactsFilterView";
import ContactsTableView from "./ContactsTableView";
import ContactsFilterPresenter from "../presenters/ContactsFilterPresenter"

class ContactsFilterContainerView extends Component {
    constructor(props) {
        super(props);

        //{"Name": "Eunice Farmer",   "Number": "(973) 934-9143" },

        this.presenter = new ContactsFilterPresenter();
        this.presenter.setView(this);

        this.updateFilterText = this.updateFilterText.bind(this);
        this.updateFilteredContacts = this.updateFilteredContacts.bind(this);

        this.state = {
            filterText: '',
            filteredContacts: []
        };
    }

    componentDidMount() {
        console.log(this.constructor.name, " : ", "In componentDidMount");
        this.updateFilterText("");
    }

    updateFilterText(filterText) {
        console.log(this.constructor.name, " : ", "In updateFilterText");
        this.setState({filterText: filterText}, function () {
            this.presenter.onFilterTextChange(filterText);
        });
    }

    updateFilteredContacts(filteredContacts) {
        console.log(this.constructor.name, " : ", "In updateFilteredContacts");
        console.log(this.constructor.name, " : ", "filteredContacts", filteredContacts);
        this.setState({filteredContacts: filteredContacts});
    }

    render() {
        console.log(this.constructor.name, " : ", "In render");
        console.log(this.constructor.name, " : ", "State:", this.state);
        console.log(this.constructor.name, " : ", "filterContacts Length:", this.state.filteredContacts.length);
        return (
            <div>
                <ContactsFilterView updateFilterText={this.updateFilterText}/>
                <ContactsTableView updateFilterText={this.updateFilterText}
                                   filteredContacts={this.state.filteredContacts}/>
            </div>
        );
    }
}

export default ContactsFilterContainerView;