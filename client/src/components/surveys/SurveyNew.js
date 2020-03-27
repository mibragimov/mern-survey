import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

const SurveyNew = () => {
	const [ showFormReview, setShowFormReview ] = useState(false);

	const renderContent = () => {
		if (showFormReview) {
			return <SurveyReview onCancel={() => setShowFormReview(false)} />;
		}

		return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
	};

	return <div>{renderContent()}</div>;
};

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
