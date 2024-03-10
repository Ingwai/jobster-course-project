import React, { useEffect } from 'react';
import { showStats } from '../../features/allJobs/allJobsSlice';
import { StatsContainer, Loading, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';

const Stats = () => {
	const { isLoading, monthlyApplications } = useSelector(store => store.allJobs);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showStats());
		// eslint-disable-next-line
	}, []);

	if (isLoading) {
		return <Loading center />;
	}

	return (
		<div>
			<StatsContainer />
			{monthlyApplications.length > 0 && <ChartsContainer />}
		</div>
	);
};

export default Stats;
