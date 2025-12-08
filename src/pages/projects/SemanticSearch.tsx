import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tradient.css';

const SemanticSearch: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tradient-detail-page">
      <button className="back-button" onClick={() => navigate('/projects')}>
        ← Back to Projects
      </button>

      <div className="tradient-detail-content">
        <div className="header-row">
          <div>
            <h1 className="project-name">Semantic Image Search - Vector Similarity with CLIP & FAISS</h1>
          </div>

          <div className="project-links-top">
            <a
              href="https://github.com/sunami09/semantic-image-search"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub Repository"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://semantic-image-search-sunami.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Live Demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* YOUTUBE VIDEO */}
      <div className="video-container" style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/YEd-6EzOdb0"
          title="Semantic Image Search Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px' }}
        ></iframe>
      </div>

      {/* SUMMARY */}
      <div className="subsection" style={{ marginTop: '2.5rem', marginLeft: '0.5rem' }}>
        <h3 className="subsection-title">Summary:</h3>
        <p className="experience-text">
          A photo search application that uses OpenAI's CLIP model (ViT-B/32) to generate 
          512-dimensional embeddings from images and text queries. The system stores embeddings 
          in a FAISS index with inner-product similarity for fast k-nearest-neighbor lookups. 
          Features incremental index updates, L2 normalization for cosine similarity, and per-user 
          isolated indices. Backend runs on two Cloud Run microservices—one for indexing, one for search.
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE OVERVIEW */}
      <div className="project-section">
        <h4 className="project-title">System Architecture Overview</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Architectural Design:</h5>

          <img 
            src="/semantic/image.png" 
            alt="Semantic Search Architecture Diagram" 
            className="video-streaming-diagram" 
            style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'block' }} 
          />
          
          <p className="experience-text">
            The system is built around a <strong>dual-service microservices architecture</strong> deployed 
            on Google Cloud Run. One service handles image indexing and embedding generation, while the 
            other manages semantic search queries. Both services share the same CLIP model to ensure 
            consistency between image and text representations.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Technology Stack:</h5>
          <ul className="solutions-list">
            <li><strong>Frontend:</strong> React + TypeScript deployed on Vercel</li>
            <li><strong>Authentication:</strong> Firebase Authentication</li>
            <li><strong>Storage:</strong> Firebase Storage for user images</li>
            <li><strong>Database:</strong> Firestore for image metadata</li>
            <li><strong>Backend Services:</strong> Two Cloud Run microservices (indexing & search)</li>
            <li><strong>ML Model:</strong> OpenAI CLIP (ViT-B/32) for embeddings</li>
            <li><strong>Vector Search:</strong> FAISS with inner-product similarity</li>
          </ul>
        </div>
      </div>

      {/* IMAGE INDEXING PIPELINE */}
      <div className="project-section">
        <h4 className="project-title">Image Indexing Pipeline</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Embedding Generation:</h5>
          <p className="experience-text">
            When users upload images, the indexing service downloads them from their URLs and processes 
            them through OpenAI's <strong>CLIP model (ViT-B/32)</strong>. This generates 512-dimensional 
            embedding vectors that capture the semantic content of each image.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Key Features:</h5>
          <ul className="solutions-list">
            <li>
              <strong>CLIP Embeddings:</strong> Each image is transformed into a 512-dimensional vector 
              that captures its visual semantics, enabling natural language search
            </li>
            <li>
              <strong>FAISS Index:</strong> Embeddings are stored in a FAISS index using inner-product 
              similarity for fast vector searches at scale
            </li>
            <li>
              <strong>Incremental Updates:</strong> New embeddings can be merged into existing indices 
              without rebuilding from scratch, making uploads efficient
            </li>
            <li>
              <strong>User Isolation:</strong> Each user has their own separate index, ensuring privacy 
              and personalized search results
            </li>
          </ul>
        </div>
      </div>

      {/* SEMANTIC SEARCH WORKFLOW */}
      <div className="project-section">
        <h4 className="project-title">Semantic Search Workflow</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Query Processing:</h5>
          <p className="experience-text">
            The search service encodes text queries using the same CLIP model, ensuring that text and 
            image embeddings exist in the same semantic space. Both embeddings are normalized so that 
            <strong>cosine similarity</strong> works correctly through inner product operations.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Search Flow:</h5>
          <ul className="solutions-list">
            <li>
              <strong>Text Encoding:</strong> User's natural language query is converted to a 
              512-dimensional embedding using CLIP's text encoder
            </li>
            <li>
              <strong>Normalization:</strong> Both text and image embeddings are L2-normalized to 
              ensure accurate cosine similarity comparisons
            </li>
            <li>
              <strong>K-NN Search:</strong> FAISS performs a k-nearest-neighbors search to find the 
              most semantically similar images
            </li>
            <li>
              <strong>Results Ranking:</strong> Top matches are returned with their similarity scores, 
              allowing users to see how well each image matches their query
            </li>
          </ul>
        </div>
      </div>

      {/* FRONTEND ARCHITECTURE */}
      <div className="project-section">
        <h4 className="project-title">Frontend Architecture</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Core Components:</h5>
          <p className="experience-text">
            Built with <strong>React + TypeScript</strong>, the frontend provides an intuitive 
            Google Photos-like interface for uploading images and searching through them with 
            natural language queries.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Key Features:</h5>
          <ul className="solutions-list">
            <li>
              <strong>Image Upload:</strong> Multi-file upload with progress tracking, supporting 
              various formats including JPEG, PNG, HEIC, WebP, and more
            </li>
            <li>
              <strong>Search Interface:</strong> Clean search bar that accepts natural language 
              queries like "sunset at the beach" or "birthday party with cake"
            </li>
            <li>
              <strong>Results Gallery:</strong> Responsive grid layout displaying matching images 
              with click-to-expand functionality
            </li>
            <li>
              <strong>Firebase Integration:</strong> Secure authentication and real-time sync with 
              Firebase Storage and Firestore
            </li>
          </ul>
        </div>
      </div>

      {/* CLOUD RUN DEPLOYMENT */}
      <div className="project-section">
        <h4 className="project-title">Cloud Run Deployment</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Service Architecture:</h5>
          <ul className="solutions-list">
            <li>
              <strong>Indexing Service:</strong> Handles image downloads from URLs, CLIP embedding 
              generation, and FAISS index management. Scales based on upload demand
            </li>
            <li>
              <strong>Search Service:</strong> Processes text queries, performs vector similarity 
              search, and returns ranked results. Optimized for low-latency responses
            </li>
            <li>
              <strong>Shared Model:</strong> Both services use the same CLIP model weights to ensure 
              embeddings are compatible across indexing and search operations
            </li>
            <li>
              <strong>Auto-scaling:</strong> Cloud Run automatically scales instances based on traffic, 
              handling burst uploads and concurrent searches efficiently
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SemanticSearch;