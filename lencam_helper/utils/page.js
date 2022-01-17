export default class Page {
	static async  getPage(ctx,params) {
		return await ctx.$store.dispatch("page/get",params).then((res)=> {
			return res.data;
		}).catch(()=>{
			return null;
		})
	};
	static async  getDetail(ctx,params) {
		
		 return await ctx.$store.dispatch("page/getDetail",params).then((res)=> {
			 return res.data;
		}).catch(()=>{
			return null;
		})
	};
}