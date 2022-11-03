import { computed, defineComponent, unref, toRef } from 'vue';
import { BasicMenu } from './Menu';
import { SimpleMenu } from '/@/components/SimpleMenu';
import { AppLogo } from '/@/components/Application';
import { MenuModeEnum, MenuSplitTyeEnum } from '/@/enums/menuEnum';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
import { useGo } from '/@/hooks/web/usePage';
import { useSplitMenu } from './useLayoutMenu';
import { openWindow } from '/@/utils';
import { propTypes } from '/@/utils/propTypes';
import { isUrl } from '/@/utils/is';
import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { useAppInject } from '/@/hooks/web/useAppInject';
import { useDesign } from '/@/hooks/web/useDesign';
export default defineComponent({
    name: 'LayoutMenu',
    props: {
        theme: propTypes.oneOf(['light', 'dark']),
        splitType: {
            type: Number,
            default: MenuSplitTyeEnum.NONE,
        },
        isHorizontal: propTypes.bool,
        // menu Mode
        menuMode: {
            type: [String],
            default: '',
        },
    },
    setup(props) {
        const go = useGo();
        const { getMenuMode, getMenuType, getMenuTheme, getCollapsed, getCollapsedShowTitle, getAccordion, getIsHorizontal, getIsSidebarType, getSplit, } = useMenuSetting();
        const { getShowLogo } = useRootSetting();
        const { prefixCls } = useDesign('layout-menu');
        const { menusRef } = useSplitMenu(toRef(props, 'splitType'));
        const { getIsMobile } = useAppInject();
        const getComputedMenuMode = computed(() => unref(getIsMobile) ? MenuModeEnum.INLINE : props.menuMode || unref(getMenuMode));
        const getComputedMenuTheme = computed(() => props.theme || unref(getMenuTheme));
        const getIsShowLogo = computed(() => unref(getShowLogo) && unref(getIsSidebarType));
        const getUseScroll = computed(() => {
            return (!unref(getIsHorizontal) &&
                (unref(getIsSidebarType) ||
                    props.splitType === MenuSplitTyeEnum.LEFT ||
                    props.splitType === MenuSplitTyeEnum.NONE));
        });
        const getWrapperStyle = computed(() => {
            return {
                height: `calc(100% - ${unref(getIsShowLogo) ? '48px' : '0px'})`,
            };
        });
        const getLogoClass = computed(() => {
            return [
                `${prefixCls}-logo`,
                unref(getComputedMenuTheme),
                {
                    [`${prefixCls}--mobile`]: unref(getIsMobile),
                },
            ];
        });
        const getCommonProps = computed(() => {
            const menus = unref(menusRef);
            return {
                menus,
                beforeClickFn: beforeMenuClickFn,
                items: menus,
                theme: unref(getComputedMenuTheme),
                accordion: unref(getAccordion),
                collapse: unref(getCollapsed),
                collapsedShowTitle: unref(getCollapsedShowTitle),
                onMenuClick: handleMenuClick,
            };
        });
        /**
         * click menu
         * @param menu
         */
        function handleMenuClick(path) {
            go(path);
        }
        /**
         * before click menu
         * @param menu
         */
        async function beforeMenuClickFn(path) {
            if (!isUrl(path)) {
                return true;
            }
            openWindow(path);
            return false;
        }
        function renderHeader() {
            if (!unref(getIsShowLogo) && !unref(getIsMobile))
                return null;
            return (<AppLogo showTitle={!unref(getCollapsed)} class={unref(getLogoClass)} theme={unref(getComputedMenuTheme)}/>);
        }
        function renderMenu() {
            const { menus, ...menuProps } = unref(getCommonProps);
            // console.log(menus);
            if (!menus || !menus.length)
                return null;
            return !props.isHorizontal ? (<SimpleMenu {...menuProps} isSplitMenu={unref(getSplit)} items={menus}/>) : (<BasicMenu {...menuProps} isHorizontal={props.isHorizontal} type={unref(getMenuType)} showLogo={unref(getIsShowLogo)} mode={unref(getComputedMenuMode)} items={menus}/>);
        }
        return () => {
            return (<>
            {renderHeader()}
            {renderMenu()}

          </>);
        };
    },
});
//# sourceMappingURL=index.vue.jsx.map
