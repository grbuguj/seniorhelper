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
        registry.addViewController("/age-table/").setViewName("forward:/age-table/index.html");
        registry.addViewController("/zodiac/").setViewName("forward:/zodiac/index.html");
        registry.addViewController("/dday/").setViewName("forward:/dday/index.html");
        registry.addViewController("/school/").setViewName("forward:/school/index.html");
        registry.addViewController("/holiday/").setViewName("forward:/holiday/index.html");
        registry.addViewController("/nolucky/").setViewName("forward:/nolucky/index.html");
        registry.addViewController("/date-diff/").setViewName("forward:/date-diff/index.html");
        registry.addViewController("/date-plus/").setViewName("forward:/date-plus/index.html");
        registry.addViewController("/date-minus/").setViewName("forward:/date-minus/index.html");
        registry.addViewController("/solar-to-lunar/").setViewName("forward:/solar-to-lunar/index.html");
        registry.addViewController("/lunar-to-solar/").setViewName("forward:/lunar-to-solar/index.html");
        registry.addViewController("/anniversary/").setViewName("forward:/anniversary/index.html");
        
        // 정책 페이지
        registry.addViewController("/privacy/").setViewName("forward:/privacy/index.html");
        registry.addViewController("/terms/").setViewName("forward:/terms/index.html");
        registry.addViewController("/contact/").setViewName("forward:/contact/index.html");
    }
}
