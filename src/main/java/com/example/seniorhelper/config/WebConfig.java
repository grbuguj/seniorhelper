package com.example.seniorhelper.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // 메인 페이지
        registry.addViewController("/").setViewName("forward:/index.html");
        
        // 기능 페이지들
        registry.addViewController("/age/").setViewName("forward:/age/index.html");
        registry.addViewController("/age-man/").setViewName("forward:/age-man/index.html");
        registry.addViewController("/age-table/").setViewName("forward:/age/table.html");
        registry.addViewController("/zodiac/").setViewName("forward:/zodiac/index.html");
        registry.addViewController("/dday/").setViewName("forward:/dday/index.html");
        registry.addViewController("/school/").setViewName("forward:/school/index.html");
        registry.addViewController("/holiday/").setViewName("forward:/holiday/index.html");
        registry.addViewController("/nolucky/").setViewName("forward:/nolucky/index.html");
        registry.addViewController("/articles/").setViewName("forward:/articles/index.html");
    }
}
