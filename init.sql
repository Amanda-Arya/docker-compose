USE application-cloud

CREATE TABLE IF NOT EXISTS livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  ano_publicacao INT
);

INSERT INTO livros (titulo, autor, ano_publicacao) VALUES
('Dom Casmurro', 'Machado de Assis', 1899),
('A Hora da Estrela', 'Clarice Lispector', 1977),
('O Alquimista', 'Paulo Coelho', 1988);