package obligatorisk.obligatorisktre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett innBillett){
        String sql="INSERT INTO Billett (film, antall, fornavn, etternavn, telefonnr, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(),innBillett.getAntall(),innBillett.getFornavn(),innBillett.getEtternavn(),innBillett.getTlf(),innBillett.getEpost());

    }
    public List<Billett> hentAlle(){
        String sql="SELECT * FROM Billett";
        List<Billett> alleBillett = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return alleBillett;
    }
    public void slettAlle(){
        String sql="DELETE FROM Billett";
        db.update(sql);
    }

}
