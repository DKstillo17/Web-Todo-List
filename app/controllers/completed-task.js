import Controller from '@ember/controller';

export default Controller.extend({
	tasks: [
		{name: "Client Meeting", date: "2019-03-27T07:22:13", completed: false, dscp: "description"},
		{name: "Drink Water", date: "2019-06-12T07:22:13", completed: false, dscp: "description"},
		{name: "Another Task", date: "2019-03-27T07:22:13", completed: false, dscp: "description"},
		{name: "A task more", date: "2019-06-12T07:22:13", completed: false, dscp: "description"}
	]
});