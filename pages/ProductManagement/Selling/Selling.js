var Zan = require('../../../zanui/index');
const App = getApp();

Page(Object.assign({}, Zan.Stepper, {
    data: {
        text: "Page Selling",
        cartItems: [{
            id: '4361900',
            name: '省力双把铆钉枪',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '49.00',
            stock: 20,
            sales: 12,
            count: 1
        }, {
            id: '4234700',
            name: '不省力单把铆钉枪',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '998.00',
            stock: 999.00,
            sales: 12,
            count: 1
        }, {
            id: '4234700',
            name: '不省力单把铆钉枪',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '998.00',
            stock: 999.00,
            sales: 12,
            count: 1
        }, {
            id: '4234700',
            name: '不省力单把铆钉枪',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '998.00',
            stock: 999.00,
            sales: 12,
            count: 1
        }, {
            id: '4234700',
            name: '不省力单把铆钉枪',
            imageURL: '/images/examplePic.jpg',
            priceForSale: '998.00',
            stock: 999.00,
            sales: 12,
            count: 1
        }],
        totalPrice: 0.00
    },


    handleZanStepperChange(e) {
        var componentId = e.componentId;
        var stepper = e.stepper;

        this.setData({
            [`cartItems[${componentId}].count`]: stepper
        });
        this.refreshTotalPrice();
    },


    addShipmentItem: function () {
        wx.scanCode({
            success: (res) => {
            console.log(res)
            }
        })
    },

    touchS: function (e) {  // touchstart
        let startX = App.Touches.getClientX(e);
        startX && this.setData({startX});
    },

    touchM: function (e) {  // touchmove
        let cartItems = App.Touches.touchM(e, this.data.cartItems, this.data.startX);
        cartItems && this.setData({cartItems});

    },

    touchE: function (e) {  // touchend
        const width = 150;
        let cartItems = App.Touches.touchE(e, this.data.cartItems, this.data.startX, width);
        cartItems && this.setData({cartItems});
    },

    refreshTotalPrice: function () {
        var totalPrice = 0;
        for (let item of this.data.cartItems) {
            totalPrice += item.count * item.priceForSale;
        }
        this.setData({
            totalPrice: totalPrice.toFixed(2)
        });
    },

    onLoad: function (options) {
        this.refreshTotalPrice();
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
}))