<?php

class Config
{

    private string $host;
    private string $username;
    private string $password;
    private string $mailerEmail;
    private string $mailerRecipient;

    public function __construct()
    {
        $env = $this->getEnv();

        $this->host = $env["host"];
        $this->username = $env["username"];
        $this->password = $env["password"];
        $this->mailerEmail = $env["mailerEmail"];
        $this->mailerRecipient = $env["mailerRecipient"];
    }

    private function getEnv(): array
    {
        return parse_ini_file("../.env");
    }

    /**
     * @return string
     */
    public function getHost(): string
    {
        return $this->host;
    }

    /**
     * @return string
     */
    public function getUsername(): string
    {
        return $this->username;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @return string
     */
    public function getMailerEmail(): string
    {
        return $this->mailerEmail;
    }

    /**
     * @return string
     */
    public function getMailerRecipient(): string
    {
        return $this->mailerRecipient;
    }
}