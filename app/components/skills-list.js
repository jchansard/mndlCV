import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['skills col-md-12'],

	sections: Ember.computed('skills', function() {
		let sectionsObject = {};
		let sectionsArray = [];
		this.get('skills').forEach((skill) =>
		{
			let type = skill.get('type');
			if (sectionsObject[type] === undefined) {
				sectionsObject[type] = [skill.get('name')];
			}
			else
			{
				sectionsObject[type].push(skill.get('name'));
			}
		});
		Object.keys(sectionsObject).forEach((key) =>
		{
			sectionsArray.push({
				name: key,
				skills: sectionsObject[key]
			});
		});
		return sectionsArray;	
	})
});
