"use strict";
exports.__esModule = true;
exports.Home = void 0;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var Twitter_1 = require("@material-ui/icons/Twitter");
var Search_1 = require("@material-ui/icons/Search");
var NotificationsNoneOutlined_1 = require("@material-ui/icons/NotificationsNoneOutlined");
var MessageOutlined_1 = require("@material-ui/icons/MessageOutlined");
var BookmarkBorderOutlined_1 = require("@material-ui/icons/BookmarkBorderOutlined");
var ListAltOutlined_1 = require("@material-ui/icons/ListAltOutlined");
var PermIdentityOutlined_1 = require("@material-ui/icons/PermIdentityOutlined");
var homeStyles = core_1.makeStyles(function (theme) { return ({
    sideMenuList: {
        listStyle: 'none'
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 14
    },
    sideMenuListItemIcon: {
        fontSize: 25
    }
}); });
exports.Home = function () {
    var classes = homeStyles();
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement(core_1.Grid, { container: true, spacing: 3 },
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 4 },
                react_1["default"].createElement(core_1.Paper, null,
                    react_1["default"].createElement("ul", { className: classes.sideMenuList },
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { color: "primary", "aria-label": "main" },
                                react_1["default"].createElement(Twitter_1["default"], { className: classes.sideMenuListItemIcon }))),
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { "aria-label": "search" },
                                react_1["default"].createElement(Search_1["default"], { className: classes.sideMenuListItemIcon })),
                            react_1["default"].createElement(core_1.Typography, { variant: 'h6', className: classes.sideMenuListItemLabel }, "\u041F\u043E\u0438\u0441\u043A")),
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { "aria-label": "search" },
                                react_1["default"].createElement(NotificationsNoneOutlined_1["default"], { className: classes.sideMenuListItemIcon })),
                            react_1["default"].createElement(core_1.Typography, { variant: 'h6', className: classes.sideMenuListItemLabel }, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")),
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { "aria-label": "search" },
                                react_1["default"].createElement(MessageOutlined_1["default"], { className: classes.sideMenuListItemIcon })),
                            react_1["default"].createElement(core_1.Typography, { variant: 'h6', className: classes.sideMenuListItemLabel }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F")),
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { "aria-label": "search" },
                                react_1["default"].createElement(BookmarkBorderOutlined_1["default"], { className: classes.sideMenuListItemIcon })),
                            react_1["default"].createElement(core_1.Typography, { variant: 'h6', className: classes.sideMenuListItemLabel }, "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438")),
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { "aria-label": "search" },
                                react_1["default"].createElement(ListAltOutlined_1["default"], { className: classes.sideMenuListItemIcon })),
                            react_1["default"].createElement(core_1.Typography, { variant: 'h6', className: classes.sideMenuListItemLabel }, "\u0421\u043F\u0438\u0441\u043E\u043A")),
                        react_1["default"].createElement("li", { className: classes.sideMenuListItem },
                            react_1["default"].createElement(core_1.IconButton, { "aria-label": "search" },
                                react_1["default"].createElement(PermIdentityOutlined_1["default"], { className: classes.sideMenuListItemIcon })),
                            react_1["default"].createElement(core_1.Typography, { variant: 'h6', className: classes.sideMenuListItemLabel }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C")),
                        react_1["default"].createElement("li", null)))),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 7 },
                react_1["default"].createElement(core_1.Paper, null, "2")),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 4 },
                react_1["default"].createElement(core_1.Paper, null, "3")))));
};
