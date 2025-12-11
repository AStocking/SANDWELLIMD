var wms_layers = [];

var format_SandwellRoads_0 = new ol.format.GeoJSON();
var features_SandwellRoads_0 = format_SandwellRoads_0.readFeatures(json_SandwellRoads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandwellRoads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandwellRoads_0.addFeatures(features_SandwellRoads_0);
var lyr_SandwellRoads_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandwellRoads_0, 
                style: style_SandwellRoads_0,
                popuplayertitle: 'Sandwell Roads',
                interactive: true,
                title: '<img src="styles/legend/SandwellRoads_0.png" /> Sandwell Roads'
            });
var format_SandwellRankingIMD_1 = new ol.format.GeoJSON();
var features_SandwellRankingIMD_1 = format_SandwellRankingIMD_1.readFeatures(json_SandwellRankingIMD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandwellRankingIMD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandwellRankingIMD_1.addFeatures(features_SandwellRankingIMD_1);
var lyr_SandwellRankingIMD_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandwellRankingIMD_1, 
                style: style_SandwellRankingIMD_1,
                popuplayertitle: 'Sandwell Ranking IMD',
                interactive: true,
    title: 'Sandwell Ranking IMD<br />\
    <img src="styles/legend/SandwellRankingIMD_1_0.png" /> 1 - 38.8<br />\
    <img src="styles/legend/SandwellRankingIMD_1_1.png" /> 38.8 - 76.6<br />\
    <img src="styles/legend/SandwellRankingIMD_1_2.png" /> 76.6 - 114.4<br />\
    <img src="styles/legend/SandwellRankingIMD_1_3.png" /> 114.4 - 152.2<br />\
    <img src="styles/legend/SandwellRankingIMD_1_4.png" /> 152.2 - 190<br />' });
var format_Towns_2 = new ol.format.GeoJSON();
var features_Towns_2 = format_Towns_2.readFeatures(json_Towns_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towns_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_2.addFeatures(features_Towns_2);
var lyr_Towns_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towns_2, 
                style: style_Towns_2,
                popuplayertitle: 'Towns',
                interactive: true,
                title: '<img src="styles/legend/Towns_2.png" /> Towns'
            });

lyr_SandwellRoads_0.setVisible(true);lyr_SandwellRankingIMD_1.setVisible(true);lyr_Towns_2.setVisible(true);
var layersList = [lyr_SandwellRoads_0,lyr_SandwellRankingIMD_1,lyr_Towns_2];
lyr_SandwellRoads_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_SandwellRankingIMD_1.set('fieldAliases', {'fid': 'fid', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'SandwellLS': 'SandwellLS', 'Sandwell_1': 'Sandwell_1', 'Sandwell_2': 'Sandwell_2', 'Sandwell_3': 'Sandwell_3', 'Sandwell_4': 'Sandwell_4', 'Sandwell_5': 'Sandwell_5', 'Sandwell_6': 'Sandwell_6', 'Sandwell_7': 'Sandwell_7', 'Sandwell_8': 'Sandwell_8', 'Sandwell_9': 'Sandwell_9', 'Sandwell10': 'Sandwell10', 'Sandwell11': 'Sandwell11', 'Sandwell12': 'Sandwell12', 'Sandwell13': 'Sandwell13', 'Sandwell14': 'Sandwell14', 'Sandwell15': 'Sandwell15', 'Sandwell16': 'Sandwell16', 'Sandwell17': 'Sandwell17', 'Sandwell18': 'Sandwell18', 'Sandwell19': 'Sandwell19', 'SandwellLSOA_LSOAname 2021': 'SandwellLSOA_LSOAname 2021', 'SandwellLSOA_Local Authority District code (2024)': 'SandwellLSOA_Local Authority District code (2024)', 'SandwellLSOA_Local Authority District name (2024)': 'SandwellLSOA_Local Authority District name (2024)', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'SandwellLSOA_Sandwell Rank (High is Worse)', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'SandwellLSOA_Income Rank (where 1 is most deprived)', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'SandwellLSOA_Employment Rank (where 1 is most deprived)', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'SandwellLSOA_Crime Rank (where 1 is most deprived)', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)', });
lyr_Towns_2.set('fieldAliases', {'ID': 'ID', 'Town': 'Town', });
lyr_SandwellRoads_0.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_SandwellRankingIMD_1.set('fieldImages', {'fid': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'SandwellLS': 'TextEdit', 'Sandwell_1': 'TextEdit', 'Sandwell_2': 'TextEdit', 'Sandwell_3': 'TextEdit', 'Sandwell_4': 'TextEdit', 'Sandwell_5': 'TextEdit', 'Sandwell_6': 'TextEdit', 'Sandwell_7': 'TextEdit', 'Sandwell_8': 'TextEdit', 'Sandwell_9': 'TextEdit', 'Sandwell10': 'TextEdit', 'Sandwell11': 'TextEdit', 'Sandwell12': 'TextEdit', 'Sandwell13': 'TextEdit', 'Sandwell14': 'TextEdit', 'Sandwell15': 'TextEdit', 'Sandwell16': 'TextEdit', 'Sandwell17': 'TextEdit', 'Sandwell18': 'TextEdit', 'Sandwell19': 'TextEdit', 'SandwellLSOA_LSOAname 2021': 'TextEdit', 'SandwellLSOA_Local Authority District code (2024)': 'TextEdit', 'SandwellLSOA_Local Authority District name (2024)': 'TextEdit', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'Range', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'Range', });
lyr_Towns_2.set('fieldImages', {'ID': 'TextEdit', 'Town': 'TextEdit', });
lyr_SandwellRoads_0.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_SandwellRankingIMD_1.set('fieldLabels', {'fid': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'SandwellLS': 'no label', 'Sandwell_1': 'no label', 'Sandwell_2': 'no label', 'Sandwell_3': 'no label', 'Sandwell_4': 'no label', 'Sandwell_5': 'no label', 'Sandwell_6': 'no label', 'Sandwell_7': 'no label', 'Sandwell_8': 'no label', 'Sandwell_9': 'no label', 'Sandwell10': 'no label', 'Sandwell11': 'no label', 'Sandwell12': 'no label', 'Sandwell13': 'no label', 'Sandwell14': 'no label', 'Sandwell15': 'no label', 'Sandwell16': 'no label', 'Sandwell17': 'no label', 'Sandwell18': 'no label', 'Sandwell19': 'no label', 'SandwellLSOA_LSOAname 2021': 'no label', 'SandwellLSOA_Local Authority District code (2024)': 'no label', 'SandwellLSOA_Local Authority District name (2024)': 'no label', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'no label', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'no label', });
lyr_Towns_2.set('fieldLabels', {'ID': 'no label', 'Town': 'no label', });
lyr_Towns_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});