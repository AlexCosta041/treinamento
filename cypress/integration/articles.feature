Feature: Articles

Scenario: Criar um Artigo
    Given que eu acesso o site
    And desejo realizar um login
    When preencher os campos email e password 
    And clicar Sing in
    Then Abri o site
