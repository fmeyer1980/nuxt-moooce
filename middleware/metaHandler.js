export default ({ route, store }) => {
	// Take the last value (latest route child)
	let pageClasses = [];
	route.meta.forEach((meta) => {
		if(typeof meta.pageClasses !== 'undefined')
		{
			if(Array.isArray(meta.pageClasses))
				pageClasses = meta.pageClasses;
			else
				pageClasses = [meta.pageClasses];
		}
	});
	
	store.commit('view/setPageClasses', pageClasses);
}
