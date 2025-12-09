import React, { useState, useMemo, useEffect } from 'react';
import '../../static/css/pages/_codeCertificate.scss';// put your CSS here

const allCertificates = [
  {
    title: 'Introduction to LLMs',
    issuer: 'Sololearn',
    date: '2025-12',
    id: 'CC-BM7VWYBU',
    description:
      'Through a combination of theoretical knowledge and practical examples, this course will equip you with a comprehensive understanding of LLMs and their significance in the AI landscape. By the end of this course, you\'ll be able to explain how these advanced models are pivotal to creating innovative AI solutions.',
    url: 'https://www.sololearn.com/en/certificates/CC-BM7VWYBU',
    image: 'https://i.ibb.co/GfGhwy2k/llm-sololearn.png',
  },
  {
    title: 'Introduction to C#',
    issuer: 'Sololearn',
    date: '2025-08',
    id: 'CC-YUX5BHQQ',
    description:
      'C# is used by many large organizations, start-ups and beginners alike. It takes some of the useful features of C and adds syntax to save time and effort.',
    url: 'https://www.sololearn.com/en/certificates/CC-YUX5BHQQ',
    image: 'https://i.ibb.co/KpGq9cb8/c-sharp.png',
  },
  {
    title: 'Vibe Coding',
    issuer: 'Sololearn',
    date: '2025-07',
    id: 'CC-TADETWOJ',
    description:
      'Perfect for beginners and future-forward developers, vibe coding makes software development more human, accessible, collaborative, and productive than ever.',
    url: 'https://www.sololearn.com/en/certificates/CC-TADETWOJ',
    image: 'https://i.ibb.co/GzDXfTH/vibe-coding.png',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Sololearn',
    date: '2025-07',
    id: 'CC-IFB8SIKR',
    description:
      'Learn the art of crafting precise and effective prompts to achieve desired results from AI systems. Dive deep into the principles of prompt engineering, communicate your intentions clearly to AI, and explore advanced techniques to optimize AI responses.',
    url: 'https://www.sololearn.com/en/certificates/CC-IFB8SIKR',
    image: 'https://i.ibb.co/TDw88cQX/prompt-engineering-icon.png',
  },
  {
    title: 'Python Intermediate',
    issuer: 'Sololearn',
    date: '2025-01',
    id: 'CC-7TYIURTO',
    description:
      'Python collection types, lambda functions, generators, decorators, object-oriented programming, and much more.',
    url: 'https://www.sololearn.com/en/certificates/CC-7TYIURTO',
    image: 'https://i.ibb.co/hxr8pNsR/intermediate-python.png',
  },
  {
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: '2025-01',
    id: 'CC-H4OF8EKL',
    description:
      'Cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges.',
    url: 'https://www.sololearn.com/en/certificates/CC-H4OF8EKL',
    image: 'https://i.ibb.co/DS5pxv1/introduction-to-python.png',
  },
  {
    title: 'Coding for Data',
    issuer: 'Sololearn',
    date: '2024-12',
    id: 'CC-YJ1Y8S6C',
    description:
      'Basic Python and SQL. A slightly misleading title of course.',
    url: 'https://www.sololearn.com/en/certificates/CC-YJ1Y8S6C',
    image: 'https://i.ibb.co/VpLCg56b/coding-for-data.png',
  },
  {
    title: 'SQL Intermediate',
    issuer: 'Sololearn',
    date: '2024-11',
    id: 'CC-5NVB5KDV',
    description:
      'Often, you need multiple tables in order to keep data integrity and avoid duplication. In this course, we’ll teach you how to easily deal with more than one table. Master the process of data manipulation and work with more complex interrelated multi-table databases.',
    url: 'https://www.sololearn.com/en/certificates/CC-5NVB5KDV',
    image: 'https://i.ibb.co/3ykWsZ9B/sql-intermediate.png',
  },
  {
    title: 'Java Intermediate',
    issuer: 'Sololearn',
    date: '2023-09',
    id: 'CC-FJIJVBP3',
    description:
      'Time to get serious and really see what Java (and you!) can do! In this course you’ll learn some concepts related to Object-Oriented Programming (OOP), Collections, and working with files.',
    url: 'https://www.sololearn.com/en/certificates/CC-FJIJVBP3',
    image: 'https://i.ibb.co/8nFKzGCN/java-intermedeiate.png',
  },
  {
    title: 'JavaScript',
    issuer: 'Sololearn',
    date: '2023-08',
    id: 'CC-WXYQA2GW',
    description:
      'Learn all the basic features of JavaScript, including making your website more interactive, changing website content, validating forms, and so much more.',
    url: 'https://www.sololearn.com/en/certificates/CC-WXYQA2GW',
    image: 'https://i.ibb.co/j9WTgG70/javascript.png',
  },
  {
    title: 'SQL',
    issuer: 'Sololearn',
    date: '2023-08',
    id: 'CC-DVJRYRU8',
    description:
      'This course covers an array of SQL-related topics, such as retrieving, updating and filtering data; functions and subqueries; creating & updating tables; & many more!',
    url: 'https://www.sololearn.com/en/certificates/CC-DVJRYRU8',
    image: 'https://i.ibb.co/zWy7FFkC/sql.png',
  },
  {
    title: 'Java',
    issuer: 'Sololearn',
    date: '2023-03',
    id: 'CT-6JS4MSTM',
    description:
      'With our interactive Java course, you’ll learn object-oriented Java programming and have the ability to write clear and valid code in almost no time at all.',
    url: 'https://www.sololearn.com/en/certificates/CT-6JS4MSTM',
    image: 'https://i.ibb.co/5qFYQrv/java.png',
  },
  {
    title: 'MSc Software Development',
    issuer: 'University of Glasgow',
    date: '2018-11',
    id: '0912407',
    description:
      'The Masters in Software Development is a specialist version of the MSc (Information Technology). It is an intensive, practically oriented programme focussing on professional software development skills, which students apply to a significant Software Development project.',
    url: 'https://www.gla.ac.uk/postgraduate/taught/softwaredevelopment/',
    image: 'https://i.ibb.co/jkstphF2/uni-of-glasgow.png',
  },
];

function CodeCertificates() {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCertificates = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return allCertificates;
    return allCertificates.filter(
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
                  key={cert.id}
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
