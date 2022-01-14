export default class Tag {
	static async getTag(ctx) {
		return await ctx.$store.dispatch("tag/get").then((res)=> {
			return res.data;
		}).catch(()=>{
			return null;
		})
	}
}