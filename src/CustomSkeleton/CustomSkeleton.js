import React from 'react';
import './CustomSkeleton.css';

const CustomSkeleton = ({children, loading, icon}) => {

  let Child = _ => children;
  let Icon = _ => icon;

	if(loading) {
		Child = _ => (
			<div className="CustomSkeleton">
				<input className="CustomSkeleton_input" readonly disabled placeholder={`${i18n('loading')}...`} />
        <Icon className="CustomSkeleton_icon" />
			</div>
		)
	}
	return (
		<Child />
	);

};

export default CustomSkeleton;