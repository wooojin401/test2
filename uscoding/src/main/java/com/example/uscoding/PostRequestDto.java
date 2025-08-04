package com.example.uscoding;

import lombok.Data;

@Data
public class PostRequestDto {


    private Long id;
    private String title;
    private String code;
    private String content;
    private String category;
}
