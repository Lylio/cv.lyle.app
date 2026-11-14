import React, { useState, useMemo, useEffect } from 'react';
import '../../static/css/pages/_codeCertificate.scss';// put your CSS here

const allCertificates = [
  {
    order: 10,
    title: 'MSc Software Development',
    issuer: 'University of Glasgow',
    date: '2018-11',
    id: '0912407',
    description:
      'The Masters in Software Development is a specialist version of the MSc (Information Technology). It is an intensive, practically oriented programme focussing on professional software development skills, which students apply to a significant Software Development project.',
    url: 'https://www.gla.ac.uk/postgraduate/taught/softwaredevelopment/',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/glasgow.png`,
  },
  {
    title: 'JavaScript Intermediate',
    order: 90,
    issuer: 'Sololearn',
    date: '2026-03',
    id: 'CC-HDKCUPUP',
    description:
      'This course will teach you how to make more complex and flexible programs as well as even more interactive websites.',
    url: 'https://www.sololearn.com/certificates/CC-HDKCUPUP',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/javascript.png`,
  },
  {
    order: 20,
    title: 'Python Developer',
    issuer: 'Sololearn',
    date: '2025-12',
    id: 'CC-JS4BU0NR',
    description:
      'You\'ll learn to build interactive programs and automate your tasks, analyze and visualize even the most complex data and create AI and machine learning models.',
    url: 'https://www.sololearn.com/en/certificates/CC-JS4BU0NR',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/python-developer.png`,
  },
  {
    order: 100,
    title: 'Introduction to LLMs',
    issuer: 'Sololearn',
    date: '2025-12',
    id: 'CC-BM7VWYBU',
    description:
      'Through a combination of theoretical knowledge and practical examples, this course will equip you with a comprehensive understanding of LLMs and their significance in the AI landscape. By the end of this course, you\'ll be able to explain how these advanced models are pivotal to creating innovative AI solutions.',
    url: 'https://www.sololearn.com/en/certificates/CC-BM7VWYBU',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/llm.png`,
  },
  {
    order: 110,
    title: 'Introduction to C#',
    issuer: 'Sololearn',
    date: '2025-08',
    id: 'CC-YUX5BHQQ',
    description:
      'C# is used by many large organizations, start-ups and beginners alike. It takes some of the useful features of C and adds syntax to save time and effort.',
    url: 'https://www.sololearn.com/en/certificates/CC-YUX5BHQQ',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/c-sharp.png`,
  },
  {
    order: 120,
    title: 'Vibe Coding',
    issuer: 'Sololearn',
    date: '2025-07',
    id: 'CC-TADETWOJ',
    description:
      'Perfect for beginners and future-forward developers, vibe coding makes software development more human, accessible, collaborative, and productive than ever.',
    url: 'https://www.sololearn.com/en/certificates/CC-TADETWOJ',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/vibe-coding.png`,
  },
  {
    order: 130,
    title: 'Prompt Engineering',
    issuer: 'Sololearn',
    date: '2025-07',
    id: 'CC-IFB8SIKR',
    description:
      'Learn the art of crafting precise and effective prompts to achieve desired results from AI systems. Dive deep into the principles of prompt engineering, communicate your intentions clearly to AI, and explore advanced techniques to optimize AI responses.',
    url: 'https://www.sololearn.com/en/certificates/CC-IFB8SIKR',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/prompt-engineering.png`,
  },
  {
    order: 140,
    title: 'Python Intermediate',
    issuer: 'Sololearn',
    date: '2025-01',
    id: 'CC-7TYIURTO',
    description:
      'Python collection types, lambda functions, generators, decorators, object-oriented programming, and much more.',
    url: 'https://www.sololearn.com/en/certificates/CC-7TYIURTO',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/python-intermediate.png`,
  },
  {
    order: 150,
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: '2025-01',
    id: 'CC-H4OF8EKL',
    description:
      'Cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges.',
    url: 'https://www.sololearn.com/en/certificates/CC-H4OF8EKL',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/python-introduction.png`,
  },
  {
    order: 30,
    title: 'Learn Advanced Java',
    issuer: 'Codecademy',
    date: '2017-02',
    id: '0969B394-3',
    description:
      'Learn the basics of parallel and concurrent programming, servlets, and sockets in this advanced Java course.',
    url: 'https://www.codecademy.com/enrolled/courses/learn-advanced-java',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/java.png`,
  },
  {
    order: 40,
    title: 'Learn SQL Course',
    issuer: 'Codecademy',
    date: '2017-02',
    id: 'D7CF4B83-E',
    description:
      'Information is all around us. You can put it to use by learning SQL basics. Used in data science, analytics, and engineering, SQL makes it easy to work with data and make more informed strategy, operations, and business decisions. It’s a helpful skill for anyone who works with data (even in non-tech roles). In this SQL course, you’ll learn how to manage large datasets and analyze real data.',
    url: 'https://www.codecademy.com/profiles/Lylio/certificates/042a4e5884e3eb6ea1f2a12be6abb851',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/sql.png`,
  },
  {
    order: 50,
    title: 'Establishing AI Guardrails and Governance',
    issuer: 'Skillsoft',
    date: '2024-08',
    id: '9d24ccbb-c4c1-4a64-a1d9-12e4971522b1',
    description:
      'Basic Python and SQL. A slightly misleading title of course.',
    url: 'https://skillsoft.digitalbadges.skillsoft.com/9d24ccbb-c4c1-4a64-a1d9-12e4971522b1',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/ai-governance.png`,
  },
  {
    order: 60,
    title: 'Coding for Data',
    issuer: 'Sololearn',
    date: '2024-12',
    id: 'CC-YJ1Y8S6C',
    description:
      'Basic Python and SQL. A slightly misleading title of course.',
    url: 'https://www.sololearn.com/en/certificates/CC-YJ1Y8S6C',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/coding-for-data.png`,
  },
  {
    order: 160,
    title: 'SQL Intermediate',
    issuer: 'Sololearn',
    date: '2024-11',
    id: 'CC-5NVB5KDV',
    description:
      'Often, you need multiple tables in order to keep data integrity and avoid duplication. In this course, we’ll teach you how to easily deal with more than one table. Master the process of data manipulation and work with more complex interrelated multi-table databases.',
    url: 'https://www.sololearn.com/en/certificates/CC-5NVB5KDV',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/sql.png`,
  },
  {
    order: 170,
    title: 'Java Intermediate',
    issuer: 'Sololearn',
    date: '2023-09',
    id: 'CC-FJIJVBP3',
    description:
      'Time to get serious and really see what Java (and you!) can do! In this course you’ll learn some concepts related to Object-Oriented Programming (OOP), Collections, and working with files.',
    url: 'https://www.sololearn.com/en/certificates/CC-FJIJVBP3',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/java.png`,
  },
  {
    order: 70,
    title: 'JavaScript',
    issuer: 'Sololearn',
    date: '2023-08',
    id: 'CC-WXYQA2GW',
    description:
      'Learn all the basic features of JavaScript, including making your website more interactive, changing website content, validating forms, and so much more.',
    url: 'https://www.sololearn.com/en/certificates/CC-WXYQA2GW',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/javascript.png`,
  },
  {
    order: 80,
    title: 'SQL',
    issuer: 'Sololearn',
    date: '2023-08',
    id: 'CC-DVJRYRU8',
    description:
      'This course covers an array of SQL-related topics, such as retrieving, updating and filtering data; functions and subqueries; creating & updating tables; & many more!',
    url: 'https://www.sololearn.com/en/certificates/CC-DVJRYRU8',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/sql.png`,
  },
  {
    order: 180,
    title: 'Java',
    issuer: 'Sololearn',
    date: '2023-03',
    id: 'CT-6JS4MSTM',
    description:
      'With our interactive Java course, you’ll learn object-oriented Java programming and have the ability to write clear and valid code in almost no time at all.',
    url: 'https://www.sololearn.com/en/certificates/CT-6JS4MSTM',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/java.png`,
  },
  {
    order: 80,
    title: 'Web Development with Java Spring Framework',
    issuer: 'Coursera',
    date: '2021-03',
    id: '4GXSTE5EF3MD',
    description:
      'Web Development with Java Spring Framework',
    url: 'https://www.coursera.org/account/accomplishments/verify/4GXSTE5EF3MD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/spring-boot.png`,
  },
  {
    order: 190,
    title: 'Core Java',
    issuer: 'Coursera',
    date: '2021-02',
    id: 'SLY39QZG9WYV',
    description:
      'Web Development with Java Spring Framework',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/SLY39QZG9WYV',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/java.png`,
  },
  {
    order: 200,
    title: 'Angular 11: Getting Started with Angular',
    issuer: 'Skillsoft',
    date: '2020-05',
    id: '73058892',
    description:
      'Angular helps build interactive and dynamic single-page applications (SPAs) through templating, two-way binding, modularization, RESTful API handling, dependency injection, and AJAX handling. It\'s a highly demanded technology and a useful language among experienced developers who want to move into full stack development. Use this course to explore the different building blocks of Angular. Examine some of the advanced features of Angular 11 and install various software components for making use of its features and benefits. Install Node.js, Visual Studio Code, and Angular CLI and learn to create and run an Angular application. Finally, investigate the different characteristics of package.json files and outline the basics of Typescript. When you\'re done with this course, you\'ll have a basic grasp of working with Angular.',
    url: 'https://skillsoft.digitalbadges.skillsoft.com/489b2623-8aff-46b7-9122-69e2ae438545#acc.UZdNAWeg',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/angular.svg`,
  },
  {
    order: 210,
    title: 'Introduction to Ansible: The Fundamentals',
    issuer: 'Coursera',
    date: '2020-04',
    id: 'c5c5269d5ae8878cd05332aca7d3fab3',
    description:
      'In this guided project you will learn how to implement infrastructure as a code practice using Ansible, a configuration management tool. The task-based approach that we follow in our guided project will get you a better understanding of Ansible that comes very handy while working on your real-life project. . Most importantly you will leave this course with more confidence that will get you to work in Ansible more efficiently.',
    url: 'https://www.coursera.org/account/accomplishments/certificate/AYKK2AWXFUYQ',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/ansible.png`,
  },
  {
    order: 220,
    title: 'Fundamentals of Red Hat Enterprise Linux',
    issuer: 'Coursera',
    date: '2021-04',
    id: 'E6LB287VTAVH',
    description:
      'This specialization introduces Red Hat Enterprise Linux system administration and private cloud capabilities of IBM Systems. IBM Power servers will be used to demonstrate these concepts. Through three courses, you will learn a range of concepts from how to get started with Linux, to using Linux in a large private cloud environment with OpenStack-based products such as IBM PowerVC. Brought to you by IBM! ',
    url: 'https://www.coursera.org/account/accomplishments/verify/4GXSTE5EF3MD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/redhat.png`,
  },
  {
    order: 90,
    title: 'Certified Entry-Level Python Programmer (PCEP)',
    issuer: 'Python Institute',
    date: '2020-12',
    id: 'd4199324-cb4f-41dc-85c3-e5557817a16e',
    description:
      'Earners of the PCEP – Certified Entry-Level Python Programmer certification have knowledge of the universal concepts of computer programming, the syntax and semantics of the Python language as well as demonstrate the ability to accomplish coding tasks related to the essentials of programming in the Python language and fundamental skills in resolving typical implementation challenges with the help of the Python Standard Library.',
    url: 'https://www.credly.com/badges/d4199324-cb4f-41dc-85c3-e5557817a16e?source=linked_in_profile',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/pcep.png`,
  },
  {
    order: 230,
    title: 'MPhil, Sociology',
    issuer: 'University of Glasgow',
    date: '2014-11',
    id: '0912407',
    description:
      'Processes of Recovery from Problem Gambling: A Qualitative Exploration: http://theses.gla.ac.uk/5470/',
    url: 'http://theses.gla.ac.uk/5470/',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/glasgow.png`,
  },
  {
    order: 240,
    title: 'MRes, Sociology and Research Methods',
    issuer: 'University of Glasgow',
    date: '2010-05',
    id: '0912407',
    description:
      'Advanced and mixed-methods training to build your confidence as a researcher. The programme offers practical, expert-led teaching that connects qualitative and quantitative methods to prepare you to understand and address major global challenges.',
    url: 'https://www.gla.ac.uk/postgraduate/taught/social-science-research-methods/',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/glasgow.png`,
  },
  {
    order: 250,
    title: 'Media, Culture & Society',
    issuer: 'Abertay University',
    date: '2009-05',
    description:
      'Core Focus: Explored how news and media are constructed, how communication shapes daily life, and the ties between culture and nationhood.Key Topics: Analyzed political culture, propaganda, media representation, and the sociology of popular media.Skills Gained: Critical analysis of texts and media, social research methods, and contextual understanding of cultural shifts',
    url: 'https://www.abertay.ac.uk/media/me3pq2n0/ba-with-honours-in-sociology.pdf',
    image: `${process.env.PUBLIC_URL || ''}/images/certificates/abertay.png`,
  },
];

function CodeCertificates() {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCertificates = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    const orderedCertificates = [...allCertificates].sort(
      (a, b) => a.order - b.order,
    );

    if (!term) return orderedCertificates;
    return orderedCertificates.filter(
      (cert) => cert.title.toLowerCase().includes(term)
        || cert.issuer.toLowerCase().includes(term)
        || cert.description.toLowerCase().includes(term)
        || cert.id.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCertificates.length / itemsPerPage),
  );

  useEffect(() => {
    // reset to first page when filters change
    setCurrentPage(1);
  }, [itemsPerPage, searchTerm]);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageCertificates = filteredCertificates.slice(start, end);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // build pagination buttons (roughly same as your script)
  const renderPaginationButtons = () => {
    if (totalPages <= 1) return null;

    const buttons = [];

    // Prev
    buttons.push(
      <button
        type="button"
        key="prev"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹ Prev
      </button>,
    );

    const maxButtons = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button type="button" key={1} onClick={() => changePage(1)}>
          1
        </button>,
      );
      if (startPage > 2) {
        buttons.push(
          <span key="start-ellipsis" className="pagination-info">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i += 1) {
      buttons.push(
        <button
          type="button"
          key={i}
          onClick={() => changePage(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="end-ellipsis" className="pagination-info">
            ...
          </span>,
        );
      }
      buttons.push(
        <button type="button" key={totalPages} onClick={() => changePage(totalPages)}>

          {totalPages}
        </button>,
      );
    }

    // Next
    buttons.push(
      <button
        type="button"
        key="next"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next ›
      </button>,
    );

    const startItem = start + 1;
    const endItem = Math.min(end, filteredCertificates.length);

    buttons.push(
      <span key="info" className="pagination-info">
        {filteredCertificates.length === 0
          ? '0 of 0'
          : `${startItem}-${endItem} of ${filteredCertificates.length}`}
      </span>,
    );

    return buttons;
  };

  return (
    <div className="code-certificates-page">
      <div className="code-certificates-container">

        <div className="controls">
          <div className="items-per-page">
            <label htmlFor="itemsPerPage">
              Show:
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
              >
                <option value={6}>6 per page</option>
                <option value={9}>9 per page</option>
                <option value={12}>12 per page</option>
                <option value={18}>18 per page</option>
              </select>
            </label>
          </div>

          <div className="search-box">
            <input
              type="text"
              id="searchInput"
              aria-label="Search certificates"
              placeholder="Search certificates by name, issuer, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {pageCertificates.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h2>No certificates found</h2>
            <p>Try adjusting your search criteria</p>
          </div>
        ) : (
          <div id="certificatesContainer" className="certificates-grid">
            {pageCertificates.map((cert) => {
              const dateFormatted = new Date(cert.date).toLocaleDateString(
                'en-US',
                { year: 'numeric', month: 'short' },
              );

              return (
                <a
                  key={`${cert.title}-${cert.date}`}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <div className="certificate-card">
                    <div className="certificate-header">
                      <div className="certificate-icon">
                        {cert.image ? (
                          <img src={cert.image} alt={`${cert.issuer} logo`} />
                        ) : (
                          cert.issuer.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="certificate-info">
                        <h3 className="certificate-title">{cert.title}</h3>
                        <div className="certificate-issuer">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                    <div className="certificate-meta">
                      <span className="certificate-date">
                        📅 {dateFormatted}
                      </span>
                      <span className="certificate-id">🆔 {cert.id}</span>
                    </div>
                    <p className="certificate-description">
                      {cert.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        <div id="pagination" className="pagination">
          {renderPaginationButtons()}
        </div>
      </div>
    </div>
  );
}

export default CodeCertificates;
