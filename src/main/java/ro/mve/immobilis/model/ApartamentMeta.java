package ro.mve.immobilis.model;

import lombok.Data;

@Data
public class ApartamentMeta {
	String pageNoExp= ".result-tools ul.nav-nummer li:last-of-type a";
	String objTypeExp= ".result-xl";
	String objUIDExp= "a[target]";
	String objUIDExp2= "href";
	String propertyTypeExp= "Apartament";
	String publishStickerExp= "New";
	
	String priceExp;
	String surfaceAndRoomsExp;
	String shortDescExp;
	
	PostalAddressMeta address;
}