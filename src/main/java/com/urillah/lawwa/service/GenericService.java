package com.urillah.lawwa.service;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class GenericService {

	public Timestamp convertStringToTimestamp(String strDate) {
		Date date = new Date();
		try {
			DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
			// you can change format of date
			date = formatter.parse(strDate);
		} catch (java.text.ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Timestamp timeStampDate = new Timestamp(date.getTime());

		return timeStampDate;
	}

}
