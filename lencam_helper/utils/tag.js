export default class Tag {
	static async getTag(ctx) {
		return await ctx.$store.dispatch("tag/get").then((respones=> {
			return respones.data;
		})).catch(()=> {
			return null;
		})
	}
}