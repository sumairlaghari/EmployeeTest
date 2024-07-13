export const COLORS = themeMode => {
    return(
        themeMode == 'dark' ? {
            // Dark Mode
                // App Main Colors
                commonWhite: '#FFFFFF',
                commonBlack: '#000000',
                placeholderCommonWhite: '#FFFFFF50',
                //themeColor: '#1B1A1D',
                themeColor: '#000000',
                statusBar: '#000000',
                button:'#21A01E',
                buttonText:'#FFFFFF',
                loaderColor:'#FFFFFF',
                loaderColor2:'#000000',

                // Tab Bar Colors
                tabBarBg: '#2B2D2E',
                tabBarBorder: '#7C7C7C',
                tabBarInactiveIcon:'#7C7C7C70',
                tabBarActiveIcon:'#FFFFFF',
                tabBarActiveBadge:'#21A01E',
                tabBarInactiveBadge:'#7C7C7C70',
                tabBarBadgeBorder:'#2B2D2E',
        } : themeMode == 'light' ? {
            // Light Mode
                // App Main Colors
                commonWhite: '#0D0D0D',
                commonBlack: '#FFFFFF',
                placeholderCommonWhite: '#0D0D0D50',
                //themeColor: '#1B1A1D',
                themeColor: '#E3E2E5',
                statusBar: '#E3E2E5',
                button:'#29CB26',
                buttonText:'#0D0D0D',
                loaderColor:'#0D0D0D',
                loaderColor2:'#FFFFFF',

                // Tab Bar Colors
                tabBarBg: '#D1D3D4',
                tabBarBorder: '#7C7C7C',
                tabBarInactiveIcon:'#7C7C7C80',
                tabBarActiveIcon:'#0D0D0D',
                tabBarActiveBadge:'#29CB26',
                tabBarInactiveBadge:'#7C7C7C80',
                tabBarBadgeBorder:'#D1D3D4',                                                                                                                                          
        } : {
            //Default Dark Mode
                // App Main Colors
                commonWhite: '#FFFFFF',
                commonBlack: '#000000',
                placeholderCommonWhite: '#FFFFFF50',
                //themeColor: '#1B1A1D',
                themeColor: '#000000',
                statusBar: '#000000',
                button:'#21A01E',
                buttonText:'#FFFFFF',
                loaderColor:'#FFFFFF',
                loaderColor2:'#000000',
                
                // Tab Bar Colors
                tabBarBg: '#2B2D2E',
                tabBarBorder: '#7C7C7C',
                tabBarInactiveIcon:'#7C7C7C70',
                tabBarActiveIcon:'#FFFFFF',
                tabBarActiveBadge:'#21A01E',
                tabBarInactiveBadge:'#7C7C7C70',
                tabBarBadgeBorder:'#2B2D2E',
        }
    )
}