package com.cgi.library.model;

import java.time.LocalDate;
import java.util.UUID;

public class CheckOutDTO {

    private UUID id;

    private String borrowerFirstName;

    private String borrowerLastName;

    private BookDTO borrowedBook;

    private LocalDate checkedOutDate;

    private LocalDate dueDate;

    private LocalDate returnedDate;


}
