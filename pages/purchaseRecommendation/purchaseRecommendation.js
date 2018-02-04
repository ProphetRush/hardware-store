var Zan = require('../../zanui/index');
const App = getApp();

Page(Object.assign({}, Zan.Stepper, {
    data: {
        text: "Page purchaseRecommendation",
        stockLacking: [{
            id: '4361900',
            name: '省力双把铆钉枪',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '49.00',
            purchasePrice: '40.00',
            stock: 20,
            sales: 12,
            count: 1
        }, {
            id: '4361901',
            name: '水管三角阀',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '998.00',
            purchasePrice: '8.00',
            stock: 30,
            sales: 12,
            count: 1
        }],
        hotSales: [{
            id: '4361903',
            name: '螺帽紧固件',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '49.00',
            purchasePrice: '0.20',
            stock: 50,
            sales: 12,
            count: 1
        }, {
            id: '4361904',
            name: '轴承 钢铁',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '998.00',
            purchasePrice: '2.00',
            stock: 35,
            sales: 12,
            count: 1
        }],
        customItems: [],
        cartItems: [],
        hasCustomItems: false,
        itemStepper: {},
        totalPrice: 0.00
    },
    addCustomItem: function () {
        wx.scanCode({
            success: (res) => {
            console.log(res)
            }
        })
    },
    handleZanStepperChange(e) {
        var componentId = e.componentId;
        var stepper = e.stepper;
        this.setData({
            [`itemStepper.item${componentId}`]: stepper
        });
        this.refreshTotalPrice();
    },
    initItemStepper: function () {
        var itemStepper = {};
        for(var i of [...this.data.stockLacking, ...this.data.hotSales, ...this.data.customItems]){
            itemStepper['item'+i.id] = 1;
        }
        this.setData({
            itemStepper: itemStepper
        })
        console.log(itemStepper)
    },

    refreshTotalPrice: function () {
        var totalPrice = 0;
        for (let item of this.data.cartItems) {
            totalPrice += this.data.itemStepper['item'+item.id] * item.purchasePrice;
        }
        this.setData({
            totalPrice: totalPrice.toFixed(2)
        });
    },
    onLoad: function (options) {
        this.setData({
           cartItems: [...this.data.stockLacking, ...this.data.hotSales, ...this.data.customItems]
        });
        this.initItemStepper();
        this.refreshTotalPrice();
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
}))