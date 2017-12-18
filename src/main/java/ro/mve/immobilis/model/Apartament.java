package ro.mve.immobilis.model;

import lombok.Data;
import ro.mve.core.BaseEntity;


@Data
public class Apartament extends BaseEntity {
	ApartamentMeta meta;
	
	String objUID;
	String propertyType= "Apartament";
	String publishSticker= "New";
	
	String price;
	String surface;
	String roomsNo;
	String shortDesc;
	
	PostalAddress address;
	
	public void setSurfaceAndRoomsNo(String surfaceAndRommsNo) {
		String m2 = "m"+'\u00B2';
		String[] data = surfaceAndRommsNo.split(m2);
		if(data.length == 2 ) {
			setSurface(data[0].trim()); 
			String[] rooms = data[1].trim().split("\\s");
			setRoomsNo(rooms.length >0? rooms[0] : data[1] ); 
		} else if(data.length == 1 ) {
			setSurface(data[0]);
		}
	}
	public Apartament(ApartamentMeta apartMeta) {
		this.meta = apartMeta;
	}

}