var CardInfo = /** @class */ (function () {
    function CardInfo() {
    }
    CardInfo.prototype.showName = function () {
        return 'hello';
    };
    CardInfo.prototype.isAcceptable = function (s) {
        return s.length;
    };
    return CardInfo;
}());
export { CardInfo };
export default CardInfo;
