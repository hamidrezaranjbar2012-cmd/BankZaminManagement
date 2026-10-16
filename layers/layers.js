var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lake_2 = new ol.format.GeoJSON();
var features_Lake_2 = format_Lake_2.readFeatures(json_Lake_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lake_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lake_2.addFeatures(features_Lake_2);
var lyr_Lake_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lake_2, 
                style: style_Lake_2,
                popuplayertitle: 'Lake',
                interactive: true,
                title: '<img src="styles/legend/Lake_2.png" /> Lake'
            });
var format_Sea_3 = new ol.format.GeoJSON();
var features_Sea_3 = format_Sea_3.readFeatures(json_Sea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sea_3.addFeatures(features_Sea_3);
var lyr_Sea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sea_3, 
                style: style_Sea_3,
                popuplayertitle: 'Sea',
                interactive: true,
                title: '<img src="styles/legend/Sea_3.png" /> Sea'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'تعداد خانوار هدف در سطح شهرستان',
                interactive: true,
    title: 'تعداد خانوار هدف در سطح شهرستان<br />\
    <img src="styles/legend/_4_0.png" /> 0 - 2641<br />\
    <img src="styles/legend/_4_1.png" /> 2641 - 10503<br />\
    <img src="styles/legend/_4_2.png" /> 10503 - 31464<br />\
    <img src="styles/legend/_4_3.png" /> 31464 - 69874<br />\
    <img src="styles/legend/_4_4.png" /> 69874 - 147295<br />' });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'نمونه خانوارهای فقیر مسکن در سطح استان',
                interactive: true,
    title: 'نمونه خانوارهای فقیر مسکن در سطح استان<br />\
    <img src="styles/legend/_5_0.png" /> 2638 - 9719<br />\
    <img src="styles/legend/_5_1.png" /> 9719 - 34622<br />\
    <img src="styles/legend/_5_2.png" /> 34622 - 60661<br />\
    <img src="styles/legend/_5_3.png" /> 60661 - 187199<br />\
    <img src="styles/legend/_5_4.png" /> 187199 - 760654<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Lake_2.setVisible(true);lyr_Sea_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Lake_2,lyr_Sea_3,lyr__4,lyr__5];
lyr_Lake_2.set('fieldAliases', {'NAME': 'NAME', 'LATIN_NAME': 'LATIN_NAME', });
lyr_Sea_3.set('fieldAliases', {'NAME': 'NAME', 'LATIN_NAME': 'LATIN_NAME', });
lyr__4.set('fieldAliases', {'Cname': 'Cname', 'Pname': 'Pname', 'CCode': 'CCode', 'CShenaseh': 'CShenaseh', 'PCode': 'PCode', 'PShenaseh': 'PShenaseh', 'Area_km2': 'Area_km2', 'mosvb_date': 'mosvb_date', 'mosvb_no': 'mosvb_no', 'Pname_en': 'Pname_en', 'Shape_Le_2': 'Shape_Le_2', 'ORIG_FID': 'ORIG_FID', 'KEY_NAME': 'KEY_NAME', 'LBL_FLAG': 'LBL_FLAG', 'UID': 'UID', 'HEIS_CODE': 'HEIS_CODE', 'HAS_REP': 'HAS_REP', 'N_UNITS': 'N_UNITS', 'MAP_FLAG': 'MAP_FLAG', 'HAS_INP': 'HAS_INP', 'X1_U50': 'X1_U50', 'X2_LOWD': 'X2_LOWD', 'W_MIN': 'W_MIN', 'W_LOWD': 'W_LOWD', 'Z_IDX': 'Z_IDX', 'SH_PROV': 'SH_PROV', 'T_REP': 'T_REP', 'T_REP_SUM': 'T_REP_SUM', 'T_REP_PCT': 'T_REP_PCT', 'P1_HP_CNT': 'P1_HP_CNT', 'P1_HP_SUM': 'P1_HP_SUM', 'Type': 'Type', });
lyr__5.set('fieldAliases', {'Pname': 'Pname', 'PCode': 'PCode', 'PShenaseh': 'PShenaseh', 'Area_km2': 'Area_km2', 'mosvb_date': 'mosvb_date', 'mosvb_no': 'mosvb_no', 'Pname_en': 'Pname_en', 'Shape_Le_2': 'Shape_Le_2', 'ORIG_FID': 'ORIG_FID', 'KEY_NAME': 'KEY_NAME', 'LBL_FLAG': 'LBL_FLAG', 'HEIS_CODE': 'HEIS_CODE', 'PART_NO': 'PART_NO', 'P1_SMP_N': 'P1_SMP_N', 'P1_URB_W': 'P1_URB_W', 'P1_C1_PL': 'P1_C1_PL', 'P1_C1_N': 'P1_C1_N', 'P1_C1_PCT': 'P1_C1_PCT', 'P1_C2A_N': 'P1_C2A_N', 'P1_C2A_PCT': 'P1_C2A_PCT', 'P1_C2B_N': 'P1_C2B_N', 'P1_C2B_PCT': 'P1_C2B_PCT', 'P1_C2C_N': 'P1_C2C_N', 'P1_C2C_PCT': 'P1_C2C_PCT', 'P1_C2D_N': 'P1_C2D_N', 'P1_C2D_PCT': 'P1_C2D_PCT', 'P1_C2_N': 'P1_C2_N', 'P1_C2_PCT': 'P1_C2_PCT', 'P1_HP_N': 'P1_HP_N', 'P1_HP_W': 'P1_HP_W', 'P1_HP_PCT': 'P1_HP_PCT', 'P1_LOWN': 'P1_LOWN', 'R22_N': 'R22_N', 'R22_T': 'R22_T', 'R22_PCT': 'R22_PCT', 'T40_HPLM': 'T40_HPLM', 'T40_HPLA': 'T40_HPLA', 'T40_RAT': 'T40_RAT', 'T40_SHR': 'T40_SHR', 'T40_HEXA': 'T40_HEXA', 'T40_TEXA': 'T40_TEXA', 'T40_HHM': 'T40_HHM', 'T40_SIZE': 'T40_SIZE', 'T40_PCM': 'T40_PCM', 'T40_PCA': 'T40_PCA', 'A_LT30': 'A_LT30', 'A_30_50': 'A_30_50', 'A_50_80': 'A_50_80', 'A_80_100': 'A_80_100', 'A_100_150': 'A_100_150', 'W_1390': 'W_1390', 'W_1395': 'W_1395', 'W_1400': 'W_1400', 'BATH_1390': 'BATH_1390', 'BATH_1395': 'BATH_1395', 'BATH_1400': 'BATH_1400', 'AREA_1390': 'AREA_1390', 'AREA_1395': 'AREA_1395', 'AREA_1400': 'AREA_1400', 'AREA_CHG': 'AREA_CHG', 'DENS_1390': 'DENS_1390', 'DENS_1395': 'DENS_1395', 'DENS_CHG': 'DENS_CHG', 'PPR_1390': 'PPR_1390', 'PPR_1395': 'PPR_1395', 'PPR_1400': 'PPR_1400', 'DUR_1390': 'DUR_1390', 'DUR_1395': 'DUR_1395', 'DUR_1400': 'DUR_1400', 'SEMI_1390': 'SEMI_1390', 'SEMI_1395': 'SEMI_1395', 'SEMI_1400': 'SEMI_1400', 'NOD_1390': 'NOD_1390', 'NOD_1395': 'NOD_1395', 'NOD_1400': 'NOD_1400', 'SEW_1390': 'SEW_1390', 'SEW_1395': 'SEW_1395', 'SEW_1400': 'SEW_1400', 'P2_TOT': 'P2_TOT', 'P2_NUNIT': 'P2_NUNIT', 'P2_CEN_N': 'P2_CEN_N', 'P2_CEN_PCT': 'P2_CEN_PCT', 'P2_MIN': 'P2_MIN', 'P2_MAX': 'P2_MAX', 'P2_R': 'P2_R', 'P2_CV_MIN': 'P2_CV_MIN', 'P2_CV_LOW': 'P2_CV_LOW', 'Class01': 'Class01', 'Class02': 'Class02', });
lyr_Lake_2.set('fieldImages', {'NAME': 'TextEdit', 'LATIN_NAME': 'TextEdit', });
lyr_Sea_3.set('fieldImages', {'NAME': 'TextEdit', 'LATIN_NAME': 'TextEdit', });
lyr__4.set('fieldImages', {'Cname': 'TextEdit', 'Pname': 'TextEdit', 'CCode': 'TextEdit', 'CShenaseh': 'TextEdit', 'PCode': 'TextEdit', 'PShenaseh': 'TextEdit', 'Area_km2': 'TextEdit', 'mosvb_date': 'TextEdit', 'mosvb_no': 'TextEdit', 'Pname_en': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'ORIG_FID': 'TextEdit', 'KEY_NAME': 'TextEdit', 'LBL_FLAG': 'Range', 'UID': 'Range', 'HEIS_CODE': 'TextEdit', 'HAS_REP': 'Range', 'N_UNITS': 'Range', 'MAP_FLAG': 'Range', 'HAS_INP': 'Range', 'X1_U50': 'TextEdit', 'X2_LOWD': 'TextEdit', 'W_MIN': 'TextEdit', 'W_LOWD': 'TextEdit', 'Z_IDX': 'TextEdit', 'SH_PROV': 'TextEdit', 'T_REP': 'TextEdit', 'T_REP_SUM': 'TextEdit', 'T_REP_PCT': 'TextEdit', 'P1_HP_CNT': 'TextEdit', 'P1_HP_SUM': 'TextEdit', 'Type': 'TextEdit', });
lyr__5.set('fieldImages', {'Pname': 'TextEdit', 'PCode': 'TextEdit', 'PShenaseh': 'TextEdit', 'Area_km2': 'TextEdit', 'mosvb_date': 'Hidden', 'mosvb_no': 'Hidden', 'Pname_en': 'TextEdit', 'Shape_Le_2': 'Hidden', 'ORIG_FID': 'Hidden', 'KEY_NAME': 'Hidden', 'LBL_FLAG': 'Hidden', 'HEIS_CODE': 'Hidden', 'PART_NO': 'Hidden', 'P1_SMP_N': 'Hidden', 'P1_URB_W': 'Hidden', 'P1_C1_PL': 'Hidden', 'P1_C1_N': 'Hidden', 'P1_C1_PCT': 'Hidden', 'P1_C2A_N': 'Hidden', 'P1_C2A_PCT': 'Hidden', 'P1_C2B_N': 'Hidden', 'P1_C2B_PCT': 'Hidden', 'P1_C2C_N': 'Hidden', 'P1_C2C_PCT': 'Hidden', 'P1_C2D_N': 'Hidden', 'P1_C2D_PCT': 'Hidden', 'P1_C2_N': 'Range', 'P1_C2_PCT': 'TextEdit', 'P1_HP_N': 'Range', 'P1_HP_W': 'TextEdit', 'P1_HP_PCT': 'TextEdit', 'P1_LOWN': 'Hidden', 'R22_N': 'Range', 'R22_T': 'Range', 'R22_PCT': 'TextEdit', 'T40_HPLM': 'TextEdit', 'T40_HPLA': 'TextEdit', 'T40_RAT': 'TextEdit', 'T40_SHR': 'TextEdit', 'T40_HEXA': 'TextEdit', 'T40_TEXA': 'TextEdit', 'T40_HHM': 'TextEdit', 'T40_SIZE': 'TextEdit', 'T40_PCM': 'TextEdit', 'T40_PCA': 'TextEdit', 'A_LT30': 'TextEdit', 'A_30_50': 'TextEdit', 'A_50_80': 'TextEdit', 'A_80_100': 'TextEdit', 'A_100_150': 'TextEdit', 'W_1390': 'TextEdit', 'W_1395': 'TextEdit', 'W_1400': 'TextEdit', 'BATH_1390': 'TextEdit', 'BATH_1395': 'TextEdit', 'BATH_1400': 'TextEdit', 'AREA_1390': 'TextEdit', 'AREA_1395': 'TextEdit', 'AREA_1400': 'TextEdit', 'AREA_CHG': 'TextEdit', 'DENS_1390': 'TextEdit', 'DENS_1395': 'TextEdit', 'DENS_CHG': 'TextEdit', 'PPR_1390': 'TextEdit', 'PPR_1395': 'TextEdit', 'PPR_1400': 'TextEdit', 'DUR_1390': 'TextEdit', 'DUR_1395': 'TextEdit', 'DUR_1400': 'TextEdit', 'SEMI_1390': 'TextEdit', 'SEMI_1395': 'TextEdit', 'SEMI_1400': 'TextEdit', 'NOD_1390': 'TextEdit', 'NOD_1395': 'TextEdit', 'NOD_1400': 'TextEdit', 'SEW_1390': 'TextEdit', 'SEW_1395': 'TextEdit', 'SEW_1400': 'TextEdit', 'P2_TOT': 'TextEdit', 'P2_NUNIT': 'Hidden', 'P2_CEN_N': 'Hidden', 'P2_CEN_PCT': 'Hidden', 'P2_MIN': 'Hidden', 'P2_MAX': 'Hidden', 'P2_R': 'Hidden', 'P2_CV_MIN': 'Hidden', 'P2_CV_LOW': 'Hidden', 'Class01': 'TextEdit', 'Class02': 'TextEdit', });
lyr_Lake_2.set('fieldLabels', {'NAME': 'no label', 'LATIN_NAME': 'no label', });
lyr_Sea_3.set('fieldLabels', {'NAME': 'no label', 'LATIN_NAME': 'no label', });
lyr__4.set('fieldLabels', {'Cname': 'inline label - always visible', 'Pname': 'inline label - always visible', 'CCode': 'inline label - always visible', 'CShenaseh': 'inline label - always visible', 'PCode': 'inline label - always visible', 'PShenaseh': 'inline label - always visible', 'Area_km2': 'inline label - always visible', 'mosvb_date': 'inline label - always visible', 'mosvb_no': 'inline label - always visible', 'Pname_en': 'inline label - always visible', 'Shape_Le_2': 'inline label - always visible', 'ORIG_FID': 'inline label - always visible', 'KEY_NAME': 'inline label - always visible', 'LBL_FLAG': 'inline label - always visible', 'UID': 'inline label - always visible', 'HEIS_CODE': 'inline label - always visible', 'HAS_REP': 'inline label - always visible', 'N_UNITS': 'inline label - always visible', 'MAP_FLAG': 'inline label - always visible', 'HAS_INP': 'inline label - always visible', 'X1_U50': 'inline label - always visible', 'X2_LOWD': 'inline label - always visible', 'W_MIN': 'inline label - always visible', 'W_LOWD': 'inline label - always visible', 'Z_IDX': 'inline label - always visible', 'SH_PROV': 'inline label - always visible', 'T_REP': 'inline label - always visible', 'T_REP_SUM': 'inline label - always visible', 'T_REP_PCT': 'inline label - always visible', 'P1_HP_CNT': 'inline label - always visible', 'P1_HP_SUM': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr__5.set('fieldLabels', {'Pname': 'inline label - always visible', 'PCode': 'inline label - visible with data', 'PShenaseh': 'inline label - always visible', 'Area_km2': 'inline label - always visible', 'Pname_en': 'inline label - always visible', 'P1_C2_N': 'inline label - always visible', 'P1_C2_PCT': 'inline label - always visible', 'P1_HP_N': 'inline label - always visible', 'P1_HP_W': 'inline label - always visible', 'P1_HP_PCT': 'inline label - always visible', 'R22_N': 'inline label - always visible', 'R22_T': 'inline label - always visible', 'R22_PCT': 'inline label - always visible', 'T40_HPLM': 'inline label - always visible', 'T40_HPLA': 'inline label - always visible', 'T40_RAT': 'inline label - always visible', 'T40_SHR': 'inline label - always visible', 'T40_HEXA': 'inline label - always visible', 'T40_TEXA': 'inline label - always visible', 'T40_HHM': 'inline label - always visible', 'T40_SIZE': 'inline label - always visible', 'T40_PCM': 'inline label - always visible', 'T40_PCA': 'inline label - always visible', 'A_LT30': 'inline label - always visible', 'A_30_50': 'inline label - always visible', 'A_50_80': 'inline label - always visible', 'A_80_100': 'inline label - always visible', 'A_100_150': 'inline label - always visible', 'W_1390': 'inline label - always visible', 'W_1395': 'inline label - always visible', 'W_1400': 'inline label - always visible', 'BATH_1390': 'inline label - always visible', 'BATH_1395': 'inline label - always visible', 'BATH_1400': 'inline label - always visible', 'AREA_1390': 'inline label - always visible', 'AREA_1395': 'inline label - always visible', 'AREA_1400': 'inline label - always visible', 'AREA_CHG': 'inline label - always visible', 'DENS_1390': 'inline label - always visible', 'DENS_1395': 'inline label - always visible', 'DENS_CHG': 'inline label - always visible', 'PPR_1390': 'inline label - always visible', 'PPR_1395': 'inline label - always visible', 'PPR_1400': 'inline label - always visible', 'DUR_1390': 'inline label - always visible', 'DUR_1395': 'inline label - always visible', 'DUR_1400': 'inline label - always visible', 'SEMI_1390': 'inline label - always visible', 'SEMI_1395': 'inline label - always visible', 'SEMI_1400': 'inline label - always visible', 'NOD_1390': 'inline label - always visible', 'NOD_1395': 'inline label - always visible', 'NOD_1400': 'inline label - always visible', 'SEW_1390': 'inline label - always visible', 'SEW_1395': 'inline label - always visible', 'SEW_1400': 'inline label - always visible', 'P2_TOT': 'inline label - always visible', 'Class01': 'inline label - always visible', 'Class02': 'inline label - always visible', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});