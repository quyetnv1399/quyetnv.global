package com.example.employee_service.managers;

import org.springframework.stereotype.Component;

@Component
public class SearchManager {

    // @Autowired
    // private EntityManager entityManager;

    // public <T> Page<T> search(Class<T> entityType, String keyword, String[] fields, int page, int pageSize) {

    //     SearchResult<T> result =  Search.session(entityManager)
    //         .search(entityType)
    //         .where(f -> f.match().fields(fields).matching(keyword))
    //         .fetch(page * pageSize, pageSize);

    //     List<T> hits = result.hits();
    //     long totalHits = result.total().hitCount();
    //     Pageable pageable = PageRequest.of(page, pageSize);
    //     return new PageImpl<>(hits, pageable, totalHits);
    // }


}
