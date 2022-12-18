var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mesjid2_semteng_1 = new ol.format.GeoJSON();
var features_mesjid2_semteng_1 = format_mesjid2_semteng_1.readFeatures(json_mesjid2_semteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid2_semteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid2_semteng_1.addFeatures(features_mesjid2_semteng_1);
var lyr_mesjid2_semteng_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mesjid2_semteng_1, 
                style: style_mesjid2_semteng_1,
                interactive: true,
                title: '<img src="styles/legend/mesjid2_semteng_1.png" /> mesjid2_semteng'
            });
var format_sekolah2_semteng_2 = new ol.format.GeoJSON();
var features_sekolah2_semteng_2 = format_sekolah2_semteng_2.readFeatures(json_sekolah2_semteng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah2_semteng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah2_semteng_2.addFeatures(features_sekolah2_semteng_2);
var lyr_sekolah2_semteng_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sekolah2_semteng_2, 
                style: style_sekolah2_semteng_2,
                interactive: true,
                title: '<img src="styles/legend/sekolah2_semteng_2.png" /> sekolah2_semteng'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mesjid2_semteng_1.setVisible(true);lyr_sekolah2_semteng_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mesjid2_semteng_1,lyr_sekolah2_semteng_2];
lyr_mesjid2_semteng_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'opening_hours': 'opening_hours', 'wheelchair': 'wheelchair', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'denomination': 'denomination', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'water_source': 'water_source', 'toilets:number': 'toilets:number', 'toilet:facilities': 'toilet:facilities', 'shelter_type': 'shelter_type', 'kitchen:facilities': 'kitchen:facilities', 'religion': 'religion', 'name': 'name', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'amenity': 'amenity', 'addr:full': 'addr:full', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_sekolah2_semteng_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'sport': 'sport', 'leisure': 'leisure', 'addr:housenumber': 'addr:housenumber', 'height': 'height', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'phone': 'phone', 'brand': 'brand', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'name': 'name', 'amenity': 'amenity', 'type': 'type', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_mesjid2_semteng_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'height': '', 'opening_hours': '', 'wheelchair': '', 'air_conditioning': '', 'addr:housenumber': '', 'school:type_idn': '', 'operator:type': '', 'denomination': '', 'addr:street': '', 'addr:postcode': '', 'water_source': '', 'toilets:number': '', 'toilet:facilities': '', 'shelter_type': '', 'kitchen:facilities': '', 'religion': '', 'name': '', 'ground_floor:height': '', 'evacuation_center': '', 'amenity': '', 'addr:full': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:city': '', 'access:roof': '', });
lyr_sekolah2_semteng_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'sport': '', 'leisure': '', 'addr:housenumber': '', 'height': '', 'addr:street': '', 'addr:postcode': '', 'phone': '', 'brand': '', 'ground_floor:height': '', 'evacuation_center': '', 'name': '', 'amenity': '', 'type': '', 'school:type_idn': '', 'operator:type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_mesjid2_semteng_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'opening_hours': 'no label', 'wheelchair': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'denomination': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'water_source': 'no label', 'toilets:number': 'no label', 'toilet:facilities': 'no label', 'shelter_type': 'no label', 'kitchen:facilities': 'no label', 'religion': 'no label', 'name': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_sekolah2_semteng_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'sport': 'no label', 'leisure': 'no label', 'addr:housenumber': 'no label', 'height': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'phone': 'no label', 'brand': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'name': 'no label', 'amenity': 'no label', 'type': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_sekolah2_semteng_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});