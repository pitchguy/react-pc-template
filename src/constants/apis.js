export default {
	/*---------------------home---------------------------*/
	login: ' /api/v1/auth/login',
	logout: '/api/v1/auth/logout',
	getNavData: '/mock/navData.json',
	getSuccessData: '/mock/success.json',
	websocketConnect:'/api/v1/dt-store/endpoint',/* websocket连接 */
	updatePassword: '/api/v1/rbac/change-password',/* 修改密码 */
	getMessageData: '/api/v1/message/list-messages',/* 获取消息 */
	getMessage:'/api/v1/system/message',/* 实时获取消息 */
	getMessageRemind:'/api/v1/message/messages-remind',/*获取消息提醒*/
	/*---------------------经营洞察---------------------------*/
	getShopId: '/api/v1/manage-insight/all-shop-id',/* 获取店铺ID */
	postChannelAmountTrend: '/api/v1/manage-insight/channel-amount-trend',/* 各支付渠道统计 */
	getChannelDistrubution: '/api/v1/manage-insight/channel-distribution',/* 支付渠道类型分布图 */
	getOrderSummary: '/api/v1/manage-insight/order-summary',/* 今日实时 */
	postSingleAmountTrend: '/api/v1/manage-insight/single-amount-trend',/* 获取每日笔单价 */
	getTop5: '/api/v1/manage-insight/top5',/* 商品销量top5 */
	getTotalAmountTrend: '/api/v1/manage-insight/total-amount-trend',/* 每日经营趋势图 */
	getOperating:'/api/v1/system/manage',/* 实时获取消息 */
	/*---------------------会员洞察---------------------------*/
	getVipOverview: '/api/v1/member-insight/member-overview',/* 会员概况 */
	getRealTime: '/api/v1/member-insight/paid-overview',/* 实时交易 */
	getHistoryContritution: '/api/v1/member-insight/member-history-contribution-overview',/* 历史贡献 */
	getDailyNewVip: '/api/v1/member-insight/member-inc-trend',/* 每日新增会员 */
	getPreferGoods: '/api/v1/member-insight/top5-fav-goods',/* 酷爱商品top5 */
	getConsumeInterval: '/api/v1/member-insight/consume-interval',/* 消费间隔 */
	getVipSingleAmount: '/api/v1/member-insight/single-amount-trend',/* 会员客单价 */
	getDistribution: '/api/v1/member-insight/distribution',/* 获取四大分布 */
	getMember:'/api/v1/system/member',/* 实时获取消息 */
	/*---------------------客流洞察---------------------------*/
	getCustomerChange: '/api/v1/flow-insight/customer-transform-overview',/* 获取顾客转化 */
	getVipChange:'/api/v1/flow-insight/member-transform-overview',/* 今日会员转化 */
	getEnterPeopleTrend:'/api/v1/flow-insight/arrived-trend',/* 获取今日进店人数趋势 */
	getTransformation:'/api/v1/flow-insight/consume-transformation-pct',/* 获取近30天消费转化率 */
	getEnterDistrubution:'/api/v1/flow-insight/arrived-distribution',/* 进店人群分布 */
	getFlow:'/api/v1/system/flow',/* 实时获取消息 */
	/*---------------------运营洞察---------------------------*/
	postOperationsData: '/api/v1/operation-insight/operation-supplier',/* 获取运营数据 */
	getCategoryData: '/api/v1/operation-insight/operation-category',/* 获取品类数据 */
	getGoodsData: '/api/v1/operation-insight/operation-goods',/* 获取商品数据 */
	getTop20Goods: '/api/v1/operation-insight/top20-goods',/* 获取热销商品top20 */
	postDynaTrend: '/api/v1/operation-insight/operation-dyna-chart',/* 获取动销率趋势图 */
	postSellQuanlity: '/api/v1/operation-insight/operation-sell-quantity',/* 获取销售数量图 */
	postSellAmount: '/api/v1/operation-insight/operation-sell-amount',/* 获取销售金额图 */
	/*---------------------运营洞察——偏好人群---------------------------*/
	getPreferTotal:'/api/v1/favour-crowd/total-favour',/* 获取偏好人群总数 */
	getPreferPopulationData:'/api/v1/favour-crowd/favour-page',/* 获取偏好人群总数 */
	/*---------------------运营洞察——品类分析——---------------------------*/
	getOperationCategoryData: '/api/v1/operation-insight/operation-category',/* 获取品类分析数据 */
	/*---------------------运营洞察——品类分析——商品分析——---------------------------*/
	getOperationGoodsData: '/api/v1/operation-insight/operation-goods',/* 获取商品分析数据 */
	/*---------------------会员中心---------------------------*/
	getVipCount: '/api/v1/member-center/count-members',/* 获取会员总数 */
	getVipsData: '/api/v1/member-center/list-members',/* 获取会员列表数据 */
	getVipInfoData: '/api/v1/member-center/detail/',/* 获取某个会员信息 */
	getPurchasingPower: '/api/v1/member-center/60days-purchasing-power-trend',/* 获取近60天购买力分析 */
	getVipPreferGoods: '/api/v1/member-center/fav-goods',/* 获取酷爱商品 */
	getVipLoveGoods:'/api/v1/member-center/fav-words',/* 获取购买偏好 */
	getVipRecommendGoods: '/api/v1/member-center/recommend-goods',/* 获取推荐商品 */
	getRemarksData:'/api/v1/member-center/list-notes',/* 获取备注列表 */
	addRemarks:'/api/v1/member-center/add-note',/* 新增备注 */
	updateRemarks:'/api/v1/member-center/edit-note',/* 修改备注 */
	deleteRemarks: '/api/v1/member-center/',/* 删除备注 */
  getFeaturesLists: '/api/v1/member-center/list-features',/* 获取特征下拉列表 */
  getConsumeList: '/api/v1/customer-order/customer-orders',/* 获取特征下拉列表 */
}
