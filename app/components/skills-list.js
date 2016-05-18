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
			let skillDescription = `${skill.get('name')}: ${skill.get('description')}`
			if (sectionsObject[type] === undefined) {
				sectionsObject[type] = [skillDescription];
			}
			else
			{
				sectionsObject[type].push(skillDescription);
			}
		});
		Object.keys(sectionsObject).forEach((key) =>
		{
			sectionsArray.push({
				name: key,
				skills: sectionsObject[key]
			});
		});
		console.log(sectionsObject);
		console.log(sectionsArray);
		return sectionsArray;	
	})
});
